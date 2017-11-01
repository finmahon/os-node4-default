node('nodejs')  {
    stage 'build'
    openshiftBuild(namespace: 'icare-dev' ,buildConfig: 'ionic-template-test', showBuildLogs: 'true')
}