import { Outlet } from "react-router-dom";
const Menu = () => {
    return ( 
        <>
        <br></br>
       <div className="container">
       <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1692030143~exp=1692033743~hmac=600e5a59cf2e2912702bfc0d27a32360cd6d3d2700679e9d833e963d5027a801&w=826" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Biriyani</h5>
        <p class="card-text">Ingredients :
        </p>
        <p class="card-text">Instructions: Prepare saffron-kewra water and chop veggies,Saute the onions,Cook biryani on low heat for 5-6 minutes,Serve hot chicken biryani with your favourite chutney or raita
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://t3.ftcdn.net/jpg/02/55/53/44/240_F_255534476_n8JzjZtzOFW5g3TXTLMd6QGVnToi6hqj.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pasta</h5>
        <p class="card-text">Ingredients :
        </p>
        <p class="card-text">Instructions: Heat 4 cups water along with ½ teaspoon salt till it comes to a boil.,When the water comes to a boil, add 100 grams penne pasta.,Cook the pasta without any lid on medium to high heat.,While the pasta is cooking, you can prepare the masala base.,
        </p>
      </div>
    </div>
  </div>
 
</div>
</div>
        <Outlet />
      </>
     );
  }
  
  export default Menu;