import React, { Component } from 'react';
class SectionDetails extends Component {
    render() { 
        return ( 
            <div>
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Website design from zero</h2>
                        <p>Section 1 : Introduction lesson </p>
                    </div>
                </div>
                    <div className="container-sm mt-4 mb-4 section-details">
                        <h1>Title 1</h1>
                        <h2>Title 2</h2>
                        <h3>Title 3</h3>
                        <h4>Title 4</h4>
                        <h5>Title 5</h5>
                        <h6>Title 6</h6>
                        <p>
                            And a paragraph Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. To design is to discover relationships and to make arrangements and rearrangements among these ingredients.
                            Media queries
                            Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

                            <b>Min-width</b> 
                            Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.
                        </p>
                        <h5>Ordered List</h5>
                        <ol>
                            <li>hethi loula</li>
                            <li>hethi thenya</li>
                            <li>hethy theltha</li>
                        </ol>
                        <h5>Unordered List</h5>
                        <ul>
                            <li>hethi loula</li>
                            <li>hethi thenya</li>
                            <li>hethy theltha</li>
                        </ul>
                        <h5>Code Block</h5>
                        <pre>
                            npm start this-react-app
                        </pre>
                        <h5>
                            and a Link
                        </h5>
                        <a href="https://meet.google.com/" >Link to google meet</a>
                        <h5>Or a video :</h5>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qAL22jkbmJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="row">
                            <div className="text-left col">
                                <button className="PrimaryButton"> <i class="fas fa-caret-left"/> Previous</button>
                            </div>
                            <div className="text-right col">
                                <button className="PrimaryButton">Next <i class="fas fa-caret-right"/></button>
                            </div> 
                        </div>
                                            
                    </div>
            </div>
        );
    }
}
 
export default SectionDetails;