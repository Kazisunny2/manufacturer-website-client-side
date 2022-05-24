import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl">
        1. How will you improve the performance of a React Application?
      </h1>
      <h2 className="text-xl">
        Answer: To optimize React rendering, you need to make sure that
        components receive only necessary props. It will let you control the CPU
        consumption and avoid over-rendering unnecessary features. The solution
        is to create a functional component that will collect all props and
        redistribute them to other components.
      </h2>
      <br />
      <h1 className="text-3xl">
        2.What are the different ways to manage a state in a React application?
      </h1>
      <h2 className="text-xl">
        Answer:There are four main types of state you need to properly manage in
        React apps
        <ul>
          <li>1.Local state.</li>
          <li>2.Global state.</li>
          <li>3.Server state.</li>
          <li>4.URL state.</li>
        </ul>
      </h2>
      <br />
      <h1 className="text-3xl">3.How does prototypical inheritance work?</h1>
      <h2 className="text-xl">
        Answer: Prototypical inheritance refers to the ability to access object
        properties from another object. We use a JavaScript prototype to add new
        properties and methods to an existing object constructor. We can then
        essentially tell our JS code to inherit properties from a prototype.
      </h2>
      <br />
      <h1 className="text-3xl">
        4.You have an array of products. Each object has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <h2 className="text-xl">
        Answer:An Array of Objects is created using the Object class, and we
        know Object class is the root class of all Classes. We use the
        Class_Name followed by a square bracket [] then object reference name to
        create an Array of Objects.
      </h2>
      <br />
      <h1 className="text-3xl">
        5.What is a unit test? Why should write unit tests?
      </h1>
      <h2 className="text-xl">
        Answer: The purpose of a unit test in software engineering is to verify
        the behavior of a relatively small piece of software, independently from
        other parts. Unit testing ensures that all code meets quality standards
        before it's deployed. This ensures a reliable engineering environment
        where quality is paramount. Over the course of the product development
        life cycle, unit testing saves time and money, and helps developers
        write better code, more efficiently.
      </h2>
    </div>
  );
};

export default Blog;
