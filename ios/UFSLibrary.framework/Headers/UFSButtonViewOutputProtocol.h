//
//  UFSButtonViewOutputProtocol.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 21.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger, UFSButtonType);

NS_ASSUME_NONNULL_BEGIN

@protocol UFSButtonViewOutputProtocol <NSObject>

@required
- (UFSButtonType)type;
- (void)buttonViewDidTap;
- (void)buttonViewDidLongTapHighlighted;
- (void)buttonViewDidLongTapNormal;

@end

NS_ASSUME_NONNULL_END
