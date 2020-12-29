def builderDocker
def CommitHash

pipeline {
    agent any 

    parameters {
        booleanParam(name: 'RunTest', defaultValue: true, description: 'Toggle this value for testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'pick CI / CI and CD')
        
    }
    stages {
        stage('Clone Code') {
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
                                        remoteDirectory: "cafe-frontend",
                                        execCommand: "sudo docker build -t afsanarozan/cafe-frontend:dev .",
                                        execTimeout: 60000,
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
                                        execCommand: 'cd cafe-frontend; sudo docker-compose up -d',
                                        execTimeout: 120000,
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