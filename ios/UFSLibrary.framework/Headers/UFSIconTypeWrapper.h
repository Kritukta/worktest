//
//  UFSIconTypeWrapper.h
//  UFSPlatform
//
//  Created by Alexander Guschin on 27.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "UFSIconType.h"

NS_ASSUME_NONNULL_BEGIN

@interface UFSIconTypeWrapper : NSObject

@property (nonatomic, assign) UFSIconType iconType;

+ (NSDictionary *)mappedValues;

- (instancetype)initFromNumber:(NSUInteger)number;
- (instancetype)initWithIconName:(NSString *)iconName;
- (NSString *)imageName;

@end

NS_ASSUME_NONNULL_END
