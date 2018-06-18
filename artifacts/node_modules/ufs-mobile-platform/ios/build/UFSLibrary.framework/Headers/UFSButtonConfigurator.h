//
//  UFSButtonConfigurator.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 30.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "UFSIconType.h"
#import "UFSButtonType.h"
#import "UFSButtonState.h"

@class UFSButtonView, UFSButtonConfiguration;

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonConfigurator : NSObject

+ (void)configureButton:(UFSButtonView *)button
          configuration:(UFSButtonConfiguration *)configuration
                  state:(UFSButtonState)state;
+ (CGFloat)buttonHeightWithTitle:(nullable NSString *)title
                            type:(UFSButtonType)type;
+ (CGFloat)buttonWidthWithTitle:(nullable NSString *)title
                           type:(UFSButtonType)type;

@end

NS_ASSUME_NONNULL_END
