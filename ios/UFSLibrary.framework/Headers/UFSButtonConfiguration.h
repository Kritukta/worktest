//
//  UFSButtonConfiguration.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 22.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <UIKit/UIKit.h>

/**
 *  Abstract class for all configurations.
 *
 */

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonConfiguration : NSObject

/**
 *  Font for title.
 */
@property (nonatomic, strong) UIFont *titleFont;
/**
 *  Normal color for title.
 */
@property (nonatomic, strong) UIColor *normalTitleColor;
/**
 *  Selected color for title.
 */
@property (nonatomic, strong) UIColor *selectedTitleColor;
/**
 *  Disabled color for title.
 */
@property (nonatomic, strong) UIColor *disabledTitleColor;
/**
 *  Text alignment for title.
 */
@property (nonatomic, assign) NSTextAlignment titleAlignment;
/**
 *  Bordred color of button.
 */
@property (nonatomic, strong) UIColor *borderColor;
/**
 *  Bordred width of button.
 */
@property (nonatomic, assign) CGFloat borderWidth;
/**
 *  Normal color.
 */
@property (nonatomic, strong) UIColor *normalBackgroundColor;
/**
 * Shadow opacity.
 */
@property (nonatomic, assign) CGFloat shadowOpacity;
/**
 *  Disabled state background color.
 */
@property (nonatomic, strong) UIColor *disabledBackgroundColor;
/**
 *  Gradient color list.
 */
@property (nonatomic, strong) NSArray<UIColor *> *selectedGradientBackgroundColorList;
/**
 *  Padding between top of button and button's title
 */
@property (nonatomic, assign) CGFloat topPadding;
/**
 *  Padding between bottom of button and button's title when button has singleline title
 */
@property (nonatomic, assign) CGFloat singlelineBottomPadding;
/**
 *  Padding between bottom of button and button's title when button has multiline title
 */
@property (nonatomic, assign) CGFloat multlineBottomPadding;
/**
 *  Padding between left text's edge and button's border
 */
@property (nonatomic, assign) CGFloat leadingPadding;
/**
 *  Padding between right text's edge and button's border
 */
@property (nonatomic, assign) CGFloat trailingPadding;
/**
 *  Attributes of button title text
 */
@property (nonatomic, strong) NSMutableParagraphStyle *titleLabelParams;
/**
 *  True if button has title, false otherwise
 */
@property (nonatomic, assign, getter=isTitled) BOOL titled;
/**
 *  Minimum width of button
 */
@property (nonatomic, assign) CGFloat minimumWidth;
/**
 *  Minimum height of button
 */
@property (nonatomic, assign) CGFloat minimumHeight;

@end

NS_ASSUME_NONNULL_END
