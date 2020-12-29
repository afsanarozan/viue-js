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
                sh 'echo passed'
            }
        }

        stage('Run Testing') {
            steps{
                script {
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
                                configName: 'nopal',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'git clone https://github.com/afsanarozan/cafe-frontend.git',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('Deployment') {
            when {
                expression {
                    CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'nopal',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'cd cafe-frontend && docker-compose up -d',
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
                    CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'nopal',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'curl localhost:8080',
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