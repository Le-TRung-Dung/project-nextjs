import { useEffect } from "react";
import { API_KEY, CLIENT_ID, SCOPES } from "../constants/conts";
import { gapi } from "gapi-script";

interface GoogleApiComponentProps {
    isScrolled: boolean;
}

const GoogleApiComponent: React.FC<GoogleApiComponentProps> = ({ isScrolled }) => {
    useEffect(() => {
        // Khởi tạo Google API khi component được mount
        function start() {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    scope: SCOPES,
                    discoveryDocs: [
                        "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
                    ],
                })
                .then(() => {
                    // console.log("Google API đã được khởi tạo thành công.");
                })
                .catch((error) => {
                    // console.error("Lỗi khi khởi tạo Google API:", error);
                });
        }

        gapi.load("client:auth2", start);
    }, []);

    const handleAuthClick = () => {
        gapi.auth2
            .getAuthInstance()
            .signIn()
            .then((LOG) => {
                console.log(LOG);
                // Lấy thông tin người dùng sau khi đăng nhập thành công
            })
            .catch((error) => {
                console.error("Lỗi khi đăng nhập:", error);
            });
    };

    return <div onClick={() => handleAuthClick()} className={`${isScrolled ? "text-black" : "text-white"} text-xl mr-6 font-bold `}>
               Đăng nhập
           </div>;
};

export default GoogleApiComponent;
