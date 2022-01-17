import { Form, Divider, Input, Button } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values); //서버로 데이터 보내기
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png"></img>
            <span>이미지를 업로드해주세요</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력하세요"
          />
        </Form.Item>
        <Divider/>
        <Form.Item
          label={<div className="upload-label">상품 이름</div>}
          name="name"
          rules={[{ required: true, message: "상품이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품이름을 입력하세요"
          />
        </Form.Item>
        <Divider/>
        <Form.Item
          label={<div className="upload-label">상품 가격</div>}
          name="price"
          rules={[{ required: true, message: "상품가격을 입력해주세요" }]}
        >
          <Input
            defaultValue={0}
            className="upload-price"
            size="large"
            placeholder="상품가격을 입력하세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품 설명</div>}
          name="upload-description"
          rules={[{ required: true, message: "상품설명을 입력해주세요" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="상품소개를 적어주세요"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품 등록하기  
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default UploadPage;
