import http from 'k6/http';

export let options = {
    duration: "5m",
    vus: 50,
    noConnectionReuse: true
};

export default function () {
    http.get("http://tomcat-service/tomcat-sample/load.jsp");
};
