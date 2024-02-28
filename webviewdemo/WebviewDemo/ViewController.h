#import <UIKit/UIKit.h>
#import "Webkit/Webkit.h"

@interface ViewController : UIViewController<WKScriptMessageHandler>
@property (strong, nonatomic) WKWebView *_webview;

@end

