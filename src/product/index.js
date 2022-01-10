import axios from "axios";
import { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useParams } from "react-router-dom";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://95608d44-9138-4790-98cd-c66aef933dea.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log("에러발생 :", error);
      });
  }, []);

  if(product === null){
	 return <h1>상품 정보를 받고 있습니다...</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={"/"+product.imageUrl}/>
      </div>
	  <div>
		  <div id="profile-box">
			  <img src="/images/icons/avatar.png"/>
			  <span>{product.seller}</span>
		  </div>
	  </div>
	  <div id="contents-box">
		  <div id="name">{product.name}</div>
		  <div id="price">{product.price}원</div>
		  <div id="createdAt">2022년 1월 10일</div>
		  <div id="description">{product.description}</div>

	  </div>
    </div>
  );
}

export default ProductPage;
