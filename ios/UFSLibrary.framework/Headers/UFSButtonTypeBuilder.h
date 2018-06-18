//
//  UFSButtonTypeBuilder.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 25.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger, UFSButtonType);

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonTypeBuilder : NSObject

+ (UFSButtonType)buttonTypeForNumber:(NSInteger)number;

@end

NS_ASSUME_NONNULL_END
