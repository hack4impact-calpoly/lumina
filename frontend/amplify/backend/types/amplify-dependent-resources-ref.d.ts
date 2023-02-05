export type AmplifyDependentResourcesAttributes = {
  api: {
    h4ilumina: {
      GraphQLAPIKeyOutput: 'string';
      GraphQLAPIIdOutput: 'string';
      GraphQLAPIEndpointOutput: 'string';
    };
    luminaAPI: {
      RootUrl: 'string';
      ApiName: 'string';
      ApiId: 'string';
    };
  };
  auth: {
    h4ilumina: {
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      UserPoolId: 'string';
      UserPoolArn: 'string';
      UserPoolName: 'string';
      AppClientIDWeb: 'string';
      AppClientID: 'string';
      CreatedSNSRole: 'string';
    };
  };
  function: {
    authLambda: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
      LambdaExecutionRoleArn: 'string';
    };
    luminaLambda: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
      LambdaExecutionRoleArn: 'string';
    };
  };
};
