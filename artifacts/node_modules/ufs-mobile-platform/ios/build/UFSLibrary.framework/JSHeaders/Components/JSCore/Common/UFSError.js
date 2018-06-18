const unknownUFSError = {
    module: 'Unknown module',
    submodule: 'Unknown submodule',
    code: 'Unknown code',
    message: 'Unknown error just happened'
};
export function makeUFSErrorFromReactError(error) {
    const userInfo = error.userInfo;
    return makeUFSErrorFromUserInfo(userInfo);
}
export function makeUFSErrorFromUserInfo(userInfo) {
    if (!userInfo) {
        return unknownUFSError;
    }
    return {
        module: userInfo.UFSModule,
        submodule: userInfo.UFSSubmodule,
        code: userInfo.UFSCode,
        message: userInfo.UFSMessage,
        underlyingError: (userInfo.UFSUnderlyingError != null) ? makeUFSErrorFromUserInfo(userInfo.UFSUnderlyingError) : null
    };
}
export function makeWorkflowErrorWithReactError(error) {
    var workflowError = {};
    let userInfo = error.userInfo;
    if (userInfo !== undefined) {
        workflowError.code = userInfo.code;
        workflowError.system = userInfo.system;
        workflowError.title = userInfo.title;
        workflowError.text = userInfo.text;
        workflowError.uuid = userInfo.uuid;
    }
    return workflowError;
}
//# sourceMappingURL=UFSError.js.map