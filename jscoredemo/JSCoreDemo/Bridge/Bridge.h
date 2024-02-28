#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

@protocol JavaScriptObjectiveCBridge <JSExport>
- (void)sendMessage:(NSString *)message;
@end

@interface JSBridge : NSObject<JavaScriptObjectiveCBridge>;
- (void)sendMessage:(NSString *)message;
@end
