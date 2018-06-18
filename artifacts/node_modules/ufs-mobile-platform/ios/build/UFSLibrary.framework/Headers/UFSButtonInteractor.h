//
//  UFSButtonInteractor.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 21.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "UFSButtonInteractorInputProtocol.h"
#import "UFSButtonInteractorOutputProtocol.h"

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonInteractor : NSObject <UFSButtonInteractorInputProtocol>

@property (nonatomic, weak) id<UFSButtonInteractorOutputProtocol> presenter;

@end

NS_ASSUME_NONNULL_END
