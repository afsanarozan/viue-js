
def builderDocker
def CommitHash

pipeline {
    agent any 

    parameters {
        booleanParam(name: 'RunTest', defaultValue: true, description: 'Toggle this value for testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'Pick something')
        
    }
    stages {

        stage('build Project') {
            steps{
                nodejs("node12") {
                    sh 'yarn install'
                }
            }
        }

        stage('Build Docker Image') {
            steps{
                script {
                    CommitHash = sh (script : "git log -n 1 --pretty=format:'%H'", returnStdout: true)
                    builderDocker = docker.build("32480/example:${CommitHash}")
                }
            }
        }

        stage('Run Testing') {
            when {
                expression {
                    params.RunTest
                }
            }
            steps{
                script {    
                    builderDocker.inside{
                        sh 'echo passed'
                    }
                }
            }
        }

        stage('Push Image') {
            when {
                expression {
                    params.RunTest
                }
            }
            steps{
                script {    
                    builderDocker.push("${env.GIT_BRANCH}")
                }
            }
        }
        stage('Deploy to production') {
            when {
                expression {
                    branch 'master'
                    params.CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'production',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'docker pull 32480/frontend:master; docker kill frontend;docker run -d --rm -p 8080:80 --name frontend 32480/frontend:master',
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('Deploy to Development') {
            when {
                expression {
                    branch 'prod'
                    params.CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'Developmen',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'docker pull 32480/frontend:prod; docker kill frontend;docker run -d --rm -p 8080:80 --name frontend 32480/frontend:prod',
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}
