import http from "@/lib/http";

export default function Home() {
  const hello = http.get('/api/fast-api-app/hello')
    .then(response => JSON.stringify(response.data))
    .catch( error => {
        console.log(error)
        return 'error'
      }
    );

  return <div><h1> Home Page</h1><div>{hello}</div></div>;
}
