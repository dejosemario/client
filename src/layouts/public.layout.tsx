import Cookies from "js-cookie";
import { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PublicLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/",);
    }else{
        setShowContent(true)
    }
  }, []);

  return showContent &&  <> {children}</> ;
};

export default PublicLayout;
