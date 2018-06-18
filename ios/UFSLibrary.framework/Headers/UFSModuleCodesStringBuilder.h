//
//  UFSModuleCodesStringBuilder.h
//  UFSPlatform
//
//  Created by Denis Smirnov on 03.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "UFSModuleCodes.h"

NS_ASSUME_NONNULL_BEGIN

@interface UFSModuleCodesStringBuilder : NSObject

/*!
 * @discussion Returns Module title for module code passed as parameter.
 * @param code Module code.
 */
+ (NSString *)moduleTitleWithCode:(UFSModuleCode)code;

@end

NS_ASSUME_NONNULL_END
