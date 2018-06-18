//
//  UFSButtonPresenter.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 21.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import "UFSButtonBridgeInputProtocol.h"
#import "UFSButtonBridgeOutputProtocol.h"
#import "UFSButtonInteractorInputProtocol.h"
#import "UFSButtonInteractorOutputProtocol.h"
#import "UFSButtonViewReactProtocol.h"
#import "UFSButtonViewInputProtocol.h"
#import "UFSButtonViewOutputProtocol.h"
#import "UFSButtonWireframeInputProtocol.h"
#import "UFSButtonWireframeOutputProtocol.h"

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonPresenter : NSObject <UFSButtonBridgeOutputProtocol,
										  UFSButtonViewOutputProtocol,
										  UFSButtonInteractorOutputProtocol,
                                          UFSButtonWireframeOutputProtocol>

@property (nonatomic, weak) id<UFSButtonViewInputProtocol, UFSButtonViewReactProtocol> view;
@property (nonatomic, weak) id<UFSButtonBridgeInputProtocol> bridge;
@property (nonatomic, strong) id<UFSButtonInteractorInputProtocol> interactor;
@property (nonatomic, strong) id<UFSButtonWireframeInputProtocol> wireframe;

@end

NS_ASSUME_NONNULL_END
