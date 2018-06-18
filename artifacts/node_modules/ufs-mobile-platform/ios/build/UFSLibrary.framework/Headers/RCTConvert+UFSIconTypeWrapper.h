//
//  RCTConvert+UFSIconType.h
//  UFSPlatform
//
//  Created by Alexander Guschin on 27.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <React/RCTConvert.h>
#import "UFSIconTypeWrapper.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (UFSIconTypeWrapper)

+ (UFSIconTypeWrapper *)UFSIconTypeWrapper:(id)json;

@end

NS_ASSUME_NONNULL_END
