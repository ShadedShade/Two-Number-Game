import React, { useEffect, useState } from 'react';
import aboutimg from '../img/aboutus.jpg';



function Blog() {
    return (
        <section id="blog" class="bg-light">
            <div class="container blogcontent">
                <div class="row mb-5 blogt">
                    <div class="col-md-8 mx-auto text-center blogtitle">
                        <h2>Our Blog</h2>
                        <p>Get to know the latest stuff via our blog posts</p>
                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="blog-post card-effect">
                            <h4 class="mt-0">HARUM VITAE DEBITIS SAPIENTE PRAESENTI.</h4>
                            <p>Lorem ipsum dolor sit amet at ibus consectetur nisi necessit repellat distinctio eveni nisi necessit at ibus sit amet repellat dolor sit amet nisi at ibus ipsum dolor sit... </p>
                            <a href="" class="shadow btn btn-primary readmore">READ MORE</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="blog-post card-effect">
                            <h4 class="mt-0">HARUM VITAE DEBITIS SAPIENTE PRAESENTI.</h4>
                            <p>Lorem ipsum dolor sit amet at ibus consectetur nisi necessit repellat distinctio eveni nisi necessit at ibus sit amet repellat dolor sit amet nisi at ibus ipsum dolor sit... </p>
                            <a href="" class="shadow btn btn-primary readmore">READ MORE</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="blog-post card-effect">
                            <h4 class="mt-0">HARUM VITAE DEBITIS SAPIENTE PRAESENTI.</h4>
                            <p>Lorem ipsum dolor sit amet at ibus consectetur nisi necessit repellat distinctio eveni nisi necessit at ibus sit amet repellat dolor sit amet nisi at ibus ipsum dolor sit... </p>
                            <a href="" class="shadow btn btn-primary readmore">READ MORE</a>
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
    );
}
export default Blog;