---
title: "Dự báo chuỗi thời gian là gì? Các loại dự báo và phương pháp thực hiện"
subtitle: "Time series forecasting (dự báo chuỗi thời gian) đúng như tên gọi của nó tức là tiên đoán những giá trị chưa biết được. Vậy nó dựa vào đâu để tiên đoán? "
date: "2023-11-10"
---

## **1. Dự báo chuỗi thời gian là gì?**

Time series forecasting (dự báo chuỗi thời gian) đúng như tên gọi của nó tức là tiên đoán những giá trị chưa biết được. Vậy nó dựa vào đâu để tiên đoán? cụ thể bằng việc thu thập dữ liệu lịch sử trước đó (như ví dụ đã nêu ở Phần 1), tiếp đó là sử dụng các thuật toán, máy học để dự đoán các giá trị trong tương lai dựa theo các mẫu đã “học” được từ dữ liệu lịch sử.

Có rất nhiều lý do khiến các công ty quan tâm đến việc dự báo những giá trị “có thể có” trong tương lai, cụ thể như là GDP, doanh thu hàng tháng, hàng tồn kho, tỷ lệ thất nghiệp, nhiệt độ toàn cầu....

Một nhà bán lẻ như “Thế giới di động” có thể quan tâm đến việc dự đoán doanh thu bán hàng trong tương lai theo cấp độ đơn vị sản phẩm (SKU) để lập kế hoạch bán hàng, xây dựng ngân sách.
Một thương gia có thể quan tâm đến dự báo bán hàng theo cửa hàng để có thể lên lịch về nguồn cung phù hợp.
Một công ty phần mềm như Google, Amazon quan tâm đến việc biết thời gian bận rộn nhất trong , hoặc ngày bận rộn nhất trong tuần (số lượng truy vấn đến máy chủ tăng theo khoảng thời gian), để có thể lập lịch quản lý tài nguyên máy chủ.
Bộ y tế có thể quan tâm đến việc dự đoán số lượng vắc xin ngừa COVID tích luỹ, để lên kế hoạch tiêm chủng, cũng như phòng ngừa bệnh dịch có thể sắp đến.
## **2. Các loại dự báo chuỗi thời gian**
Có 3 loại dự báo chuỗi thời gian, tuỳ thuộc dữ liệu đầu vào bạn xử lý là như thế nào để lựa chọn theo trường hợp để sử dụng.

Dự báo đơn biến: Chuỗi thời gian đơn biến là chuỗi có một biến phụ thuộc vào khoảng thời gian. Ví dụ: Theo dõi giá trị nhiệt độ theo giờ cho một khu vực nhất định và muốn dự báo nhiệt độ trong tương lai dựa vào dữ liệu lịch sử về nhiệt độ trước , thì đây là dự báo chuỗi thời gian đơn biến. Dữ liệu của bạn sẽ trông kiểu như thế này:


Dự báo đa biến: Chuỗi thời gian đa biến là chuỗi có nhiều biến phụ thuộc vào thời gian. Mỗi biến không chỉ phụ thuộc vào giá trị quá khứ của nó mà còn ràng buộc vào các biến khác, sự ràng buộc này được sử dụng để dự báo các giá trị trong tương lai. Hay xem xét ví dụ trên, và giả sử rằng tập dữ liệu của chúng ta bao gồm các thuộc tính khác liên quan đến thời tiết trong cùng một khoảng thời gian, chẳng hạn như: độ ẩm, tốc độ gió, khả năng có mây, điểm sương, ... cùng với nhiệt độ. Trong trường hợp này có nhiều biến số được xem xét để dự đoán nhiệt độ theo cách chính xác hơn. Tập dữ liệu của bạn bây giờ sẽ trông kiểu như này:


Giờ bạn vẫn đang dự báo các giá trị nhiệt độ cho tương lai nhưng bây giờ bạn có thể sử dụng thông tin có sẵn khác trong dự báo của mình vì “có thể” các giá trị nhiệt độ cũng sẽ phụ thuộc vào các yếu tố này. Ta có bảng dưới đây để so sánh 2 dạng dự báo:



Khi chúng ta xử lý dự báo chuỗi thời gian đa biến các biến đầu vào có thể có 2 loại:

Ngoại sinh (Exogenous): Các biến đầu vào KHÔNG BỊ ảnh hưởng bởi các biến đầu vào khác, nhưng biến đầu ra phụ thuộc vào nó.
Nội sinh (Endogenous): Các biến đầu ra BỊ ảnh hưởng bởi các biến đầu vào khác, và biến đầu ra phụ thuộc vào nó.
## **3. Phương pháp dự báo chuỗi thời gian**
Phương pháp dự đoán chuỗi thời gian có thể phân thành các loại như sau:

*Mô hình cổ điển/thống kê (Classical / Statistical Models) - Đường trung bình động MA, liên tiến lũy thừa ES, ARIMA, SARIMA, TBATS, GARCH.
Máy học (Machine Learning) - ML Forecast, Linear Regression, XGBoost, Random Forest
Học sâu (Deep Learning) - RNN, LSTM
Trong series này chúng ta sẽ đi vào từng phương pháp, phân tích ưu nhược điểm và thực hành theo từng phương pháp này, chi tiết sẽ đề cập tại các phần sau.*