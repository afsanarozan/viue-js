def builderDocker
def CommitHash

pipeline {
    agent any 

    parameters {
        booleanParam(name: 'RunTest', defaultValue: true, description: 'Toggle this value for testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'pick CI / CI and CD')
        
    }
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    CommitHash = sh (script : "git log -n 1 --pretty=format:'%H'", returnStdout: true)
                    builderDocker = docker.build("afsanarozan/cafe-frontend:${CommitHash}")
                }
            }
        }

        stage('Run Testing') {
            script {
                    builderDocker.inside {
                        sh 'echo passed'
                    }
                }
            }
        

        stage('Build Image') {
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'cd ansible2/ansible/frontend; ansible-playbook -i hosts builderprod.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('deployment to development') {
            when {
                expression {
                    BRANCH_NAME == "dev" && CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'cd ansible2/ansible/frontend; ansible-playbook -i hosts deployDev.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

               stage('Run Testing Development') {
            when {
                expression {
                    BRANCH_NAME == "dev" && CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'ansible dev-server -a "curl localhost:8080"',
                                        execTimeout: 60000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('deployment to production') {
            when {
                expression {
                    BRANCH_NAME == "prod" && CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'cd ansible2/ansible/frontend; ansible-playbook -i hosts deployProd.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('Run Testing production') {
            when {
                expression {
                    BRANCH_NAME == "prod"  && CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'ansible prod-server -a "curl localhost:8080"',
                                        execTimeout: 60000,
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