pipeline {
    // 1. runs in any agent, otherwise specify a slave node
    agent any
//    parameters {
// 2.variables for the parametrized execution of the test: Text and options.
//        choice(choices: 'yes\nno', description: 'Are you sure you want to execute this test?', name: 'run_test_only')
//       choice(choices: 'yes\nno', description: 'Archived war?', name: 'archive_war')
//      string(defaultValue: "barmor11@gmail.com", description: 'email for notifications', name: 'notification_email')
//    }
//3. Environment variables
//
//firstEnvVar= 'FIRST_VAR'
//secondEnvVar= 'SECOND_VAR'
//thirdEnvVar= 'THIRD_VAR'
//}
//4. Stages
    stages {
        stage('Test'){
           
            steps{
                sh '''#!/bin/bash
		cd /var/lib/jenkins/workspace/Pipeline_Test/ 
                javac HelloWorld.java
                java HelloWorld
		mkdir bargever
		rm -rf bargever
		'''
            }
        }
//5. demo parallel stage with script
//        stage ('Run demo parallel stages') {
//steps {
//        parallel(
//        "Parallel stage #1":
//                  {
//                  //running a script instead of DSL. In this case to run an if/else
//                  script{
//                    
//                        echo 'stage1'
//                       
//                  }
//         },
//        "Parallel stage #2":{
//                echo "stage2"
//               }
//                )
        //     }
       // }
    }

}
