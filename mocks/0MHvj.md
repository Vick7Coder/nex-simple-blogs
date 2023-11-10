---
title: "Periphery: xóa bỏ code thừa trong Swift một cách thông minh"
subtitle: "Trong việc phát triển phần mềm, việc bảo trì và tối ưu mã là rất quan trọng để tạo ra ứng dụng chất lượng cao. Khi dự án ngày càng lớn và phức tạp hơn, việc theo dõi tất cả mã và đảm bảo mỗi phần của nó được sử dụng một cách hiệu quả trở nên khó khăn hơn.."
date: "2023-11-10"
---

Trong việc phát triển phần mềm, việc bảo trì và tối ưu mã là rất quan trọng để tạo ra ứng dụng chất lượng cao. Khi dự án ngày càng lớn và phức tạp hơn, việc theo dõi tất cả mã và đảm bảo mỗi phần của nó được sử dụng một cách hiệu quả trở nên khó khăn hơn. Lúc đó việc phát hiện và loại bỏ các đoạn code thừa là rất quan trọng. Đó là lý do Periphery xuất hiện.

Periphery
Periphery A tool to identify unused code in Swift projects.

Periphery là một công cụ mã nguồn mở được thiết kế đặc biệt cho các dự án Swift. Nó đóng vai trò như một trợ lý mạnh mẽ giúp xác định và loại bỏ mã không sử dụng, giúp nhà phát triển tối ưu hóa ứng dụng của họ và cải thiện hiệu suất tổng thể. Bằng cách phân tích mã nguồn dự án của bạn, Periphery cung cấp những thông tin về những vị trí mà mã không còn được sử dụng, cho phép bạn tự tin loại bỏ nó và giảm sự lộn xộn không cần thiết.

Source code: https://github.com/peripheryapp/periphery

Cài đặt
Homebrew

brew install peripheryapp/periphery/periphery

Mint

mint install peripheryapp/periphery

CocoaPods

Thêm vào Podfile:

pod 'Periphery'

Sau đó chạy pod install, Chương trình thực thi Periphery sẽ được tải về và đặt tại Pods/Periphery/periphery.

Cách sử dụng
Sử dụng command scan
Lệnh scan là chức năng chính của Periphery. Để bắt đầu một quá trình cài đặt, mở terminal tại thư mục dự án và chạy lệnh:

periphery scan --setup

Sau đó hãy chọn theo các options phù hợp với dự án của bạn. Nếu bạn gặp khó khăn trong quá trình cài đặt bạn có thể sử dụng lệnh periphery help scan

Configuration
Sau khi bạn đã chọn các tùy chọn phù hợp cho dự án của mình, bạn có thể muốn lưu trữ chúng trong một tệp cấu hình YAML. Cách đơn giản nhất để làm điều này là chạy Periphery với tùy chọn --verbose. Ở console bạn sẽ thấy phần [configuration:begin] chứa cấu hình của bạn được định dạng dưới dạng YAML. Sao chép và dán cấu hình vào tệp .periphery.yml trong thư mục gốc của dự án của bạn.

Bây giờ bạn chỉ cần chạy lệnh periphery scan.

Screenshot 2023-11-08 at 20.20.24.png

Tích hợp vào Xcode
Việc sử dụng command line scan như trên chỉ giúp chúng ta biết dòng nào bị nhưng với giao diện console như trên thực sự rất khó sử dụng. Chúng ta cần phải tích hợp trực tiếp vào xcode.

Trước khi tích hợp vào xcode bạn nên chạy thử trước nó với terminal, nếu nó chạy OK thì việc apply vào xcode sẽ rất dễ dàng.

Bước 1: Tạo Aggregate Target
Chọn dự án của bạn trong Project Navigator và nhấn vào nút + ở góc dưới bên trái của phần Targets. Chọn Other sau đó chọn Aggregate


Đặt tên cho Target mới, ví dụ Periphery hoặc Check Unused Code


Sau đó ấn Finish để tạo Target mới.

Bước 2: Thêm Run script
Mở mục Build Phases và ấn vào nút + rồi chọn New Run Script Phase (nhớ chọn Target mới tạo ở trên)


Sau đó bạn có thể điền lệnh command đã chạy ở trên vào Shell Script: periphery scan

Nếu bạn sử dụng CocoaPods thì có thể điền command như hình dưới:


Bước 3: Chọn Scheme và Chạy
Tất cả mọi thứ đã sẵn sàng, giờ bạn chỉ cần chọn scheme của periphery ấn Run và đợi thành quả 😉


Chú ý: Ở một số version Xcode sẽ không có sẵn Scheme này, bạn cần phải tạo 1 scheme mới và chọn Periphery mới có để chạy nhé.

Và đây là thành quả:


Thật thú vị đúng không? Periphery vẫn còn nhiều chức năng khác nữa. Hãy cùng apply vào project và trải nghiệm nhé.

Tài liệu tham khảo:

Periphery: https://github.com/peripheryapp/periphery