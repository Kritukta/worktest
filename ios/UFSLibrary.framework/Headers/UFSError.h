//
//  UFSError.h
//  UFSPlatform
//
//  Created by Denis Smirnov on 03.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

extern NSString * _Nonnull const kUFSModuleFieldName;
extern NSString * _Nonnull const kUFSSubmoduleFieldName;
extern NSString * _Nonnull const kUFSCodeFieldName;
extern NSString * _Nonnull const kUFSMessageFieldName;

NS_ASSUME_NONNULL_BEGIN

@interface UFSError : NSError

/*!
 * @discussion Module name.
 */
@property (nonatomic, strong, readonly) NSString *module;

/*!
 * @discussion Submodule name.
 */
@property (nonatomic, strong, readonly) NSString *submodule;

/*!
 * @discussion UFSError code value.
 */
@property (nonatomic, strong, readonly) NSString *ufsCode;

/*!
 * @discussion Error message.
 */
@property (nonatomic, strong, readonly) NSString *message;

/*!
 * @discussion Method builds UFSError instance.
 * @param module Module name which generated an error.
 * @param submodule Submodule name which generated an error.
 * @param code Error code.
 * @param message Error message.
 * @param userInfo User Info dictionary of NSError.
 */
+ (UFSError *)errorWithModule:(NSString *)module
                    submodule:(NSString *)submodule
                         code:(NSString *)code
                      message:(NSString *)message
                     userInfo:(nullable NSDictionary *)userInfo;

+ (instancetype)errorWithDomain:(NSString *)domain
                           code:(NSInteger)code
                       userInfo:(nullable NSDictionary *)dict NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;

@end

NS_ASSUME_NONNULL_END
