import Header from "@/components/Header";
import HomeImage from "@/components/HomeImage";

type Porps = {

    childern:React.ReactNode;
}

const layout = ({childern}:Porps)=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <HomeImage/>
            <div className="container mx-auto flex-1 py-10">
            {childern}
            </div>

        </div>
    )

}
export default layout
