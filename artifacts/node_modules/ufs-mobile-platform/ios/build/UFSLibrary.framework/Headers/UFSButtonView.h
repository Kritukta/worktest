//
//  UFSButtonView.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 21.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import "UFSView.h"
#import "UFSButtonViewOutputProtocol.h"
#import "UFSButtonViewInputProtocol.h"

/**
 *  UFSButtonView is a class of UFS Platform. Implementing UI component - Button. UFSButton is subclassing from UIView.
 *	@see UIView
 */

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonView : UFSView <UFSButtonViewInputProtocol>

@property (nonatomic, strong) id<UFSButtonViewOutputProtocol> presenter;

@end

NS_ASSUME_NONNULL_END
