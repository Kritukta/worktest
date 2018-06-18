//
//  UFSButtonView.protected.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 30.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonView ()

@property (nonatomic, weak) IBOutlet NSLayoutConstraint *topConstraint;
@property (nonatomic, weak) IBOutlet NSLayoutConstraint *trailingConstraint;
@property (nonatomic, weak) IBOutlet NSLayoutConstraint *bottomConstraint;
@property (nonatomic, weak) IBOutlet NSLayoutConstraint *leadingConstraint;

@property (nonatomic, strong) CAGradientLayer *gradientLayer;
@property (nonatomic, weak) IBOutlet UILabel *titleLabel;

@property (nonatomic, assign) UFSButtonType type;
@property (nonatomic, assign) UFSButtonState state;

@end

NS_ASSUME_NONNULL_END
