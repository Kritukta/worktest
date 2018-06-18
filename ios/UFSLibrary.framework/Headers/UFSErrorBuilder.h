//
//  UFSSysCallsErrorBuilder.h
//  UFSPlatform
//
//  Created by Denis Smirnov on 03.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#define TargetClass(class) NSClassFromString([NSString stringWithFormat:@"%@%@", NSStringFromClass(class), @"ErrorBuilder"])
#define UFSError(errorCodeValue) [TargetClass([self class]) errorWithCode:errorCodeValue]
#define UFSErrorWithUserInfo(errorCodeValue, userInfoDictionary) [TargetClass([self class]) errorWithCode:errorCodeValue userInfo:userInfoDictionary]
#define UFSErrorWithNSError(nsError) [UFSErrorBuilder errorWithNSError:nsError]

#import <Foundation/Foundation.h>
#import "UFSModuleCodes.h"

NS_ASSUME_NONNULL_BEGIN

@class UFSError;
@interface UFSErrorBuilder : NSObject

/*!
 * @discussion Returns UFSError instance.
 * @param code Error code.
 */
+ (UFSError *)errorWithCode:(NSInteger)code;

/**
 Method to build UFSError instance with specified parameters

 @param code Error code
 @param userInfo additional info to pass to JS layer
 @return UFSError instance
 */
+ (UFSError *)errorWithCode:(NSInteger)code
                   userInfo:(nullable NSDictionary *)userInfo;

/*!
 * @discussion Returns UFSError instance.
 * @param error NSError instance.
 */
+ (UFSError *)errorWithNSError:(NSError *)error;

@end

NS_ASSUME_NONNULL_END
