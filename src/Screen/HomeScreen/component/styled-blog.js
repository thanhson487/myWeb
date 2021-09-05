import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.p`
  padding: 40px 120px 40px 120px;
  font-weight: 700;
  line-height: 1.2em;
  font-family: "Lobster", cursive;
  font-family: "Old Standard TT", serif;
  font-size: 48px;
  @media (max-width: 767px) {
    font-size: 2em;
    padding: 50px;
  }
`;
export const WrapperBlog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
export const WrapperBlogContainer = styled.div`
  width: 80%;
`;
export const Overlay = styled.div`
  display: none;
  background-color: black;
  opacity: 0.1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
export const CustomImage = styled.img`
  height: auto;
  max-width: 100%;
  border-radius: 5px;
`;
export const WrapperImage = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      display: inline-block;
      z-index: 99;
      transition: all 0.5s ease;
    }
    ${CustomImage} {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
`;

export const WrapperDr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const TitleDr = styled.p`
  font-weight: 700;
  line-height: 1.2em;
  font-family: "Lobster", cursive;
  font-family: "Old Standard TT", serif;
  font-size: 32px;
  &:hover {
    color: #8bb8c1;
  }
`;
export const TitleDr2 = styled.p``;
export const WrapperContent2 = styled.div``;
export const CustomContent = styled.p`
  line-height: 1.7;
  font-size: 16px;
  text-align: center;

  width: 100%; // chiều rộng bằng khối bao nó
  white-space: pre-wrap;
  overflow: hidden; // ẩn các nội dung khi kích thước lớn hơn chiều rộng khối bên ngoài
  text-overflow: ellipsis; //thêm 3 dấu chấm ở cuối
  -webkit-line-clamp: 3; // số dòng muốn hiển thị
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
export const CustomItem = styled.i`
  color: #8bb8c1 !important;
`;
