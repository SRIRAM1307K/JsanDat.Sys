import React from "react";
import Footer from "./Footer";

export default function PricingPage() {
  return (
    <>
      <div className="pt-20 px-4 md:px-16 lg:px-32 bg-white mt-10 text-gray-900">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[rebeccapurple] mb-4">
            Pricing
          </h1>
          <p className="text-lg">
            Choose the plan that best fits your annotation needs.
          </p>
        </header>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="shadow-[4px_4px_6px_-1px_rebeccapurple] rounded-lg p-6 transition duration-300 hover:shadow-[4px_4px_10px_rebeccapurple] hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-4 text-[rebeccapurple]">
              Per Annotation Pricing
            </h2>
            <ul className="pl-5 text-lg space-y-2">
              <li>Bounding Boxes: $0.02 – $0.05 per object</li>
              <li>Polygons: $0.04 – $0.15 per object</li>
              <li>Semantic Segmentation: $0.04 – $0.50+ per object</li>
              <li>Lidar 3D Point Cloud: $0.50 – $4 per object</li>
              <li>Key points: $0.010 – $0.15 per object</li>
              <li>Cuboids / 3D Boxes: $0.04 – $1.00 per object</li>
              <li>Text Entity Recognition: $0.015 – $0.03 per entity</li>
              <li>Medical Image Annotation: $1 – $5+ per entity</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="shadow-[4px_4px_6px_-1px_rebeccapurple] rounded-lg p-6 transition duration-300 hover:shadow-[4px_4px_10px_rebeccapurple] hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-4 text-[rebeccapurple]">
              Per-Frame or Per-Minute Pricing
            </h2>
            <ul className="pl-5 text-lg space-y-2">
              <li>Image Annotation: $0.01 – $4.00 per image</li>
              <li>Video Annotation: $0.01 – $0.04 per frame</li>
              <li>Audio Annotation: $0.10 – $7.00 per minute</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="shadow-[4px_4px_6px_-1px_rebeccapurple] rounded-lg p-6 transition duration-300 hover:shadow-[4px_4px_10px_rebeccapurple] hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-4 text-[rebeccapurple]">
              Hourly Rates
            </h2>
            <ul className="pl-5 text-lg space-y-2">
              <li>General Annotation Tasks: $3 – $5 per hour</li>
              <li>
                Specialized Tasks (e.g., NLP, Medical Imaging): Up to $8 – $10
                per hour
              </li>
            </ul>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-gray-100 mx-0 rounded-lg p-6 mb-12">
          <h2 className="text-3xl underline font-bold mb-4 text-[rebeccapurple]">
            Note
          </h2>
          <ul className=" pl-5 space-y-2">
            <li>
              Prices can vary depending on the complexity and quality
              requirements of the annotation task.
            </li>
            <li>
              Higher complexity tasks, such as detailed semantic segmentation or
              multi-object tracking, tend to be at the higher end of the pricing
              spectrum.
            </li>
            <li>
              Hourly rates are often used for projects requiring specialized
              expertise or when the volume of data is variable.
            </li>
          </ul>
          <p
            id="offer"
            className="mt-4 font-bold text-2xl text-center rounded-2xl p-4 border shadow-[0px_0px_5px_4px_rebeccapurple] transition duration-300 hover:shadow-[0px_0px_5px_5px_rebeccapurple] hover:scale-[1.01] hover:text-[white]"
          >
            Special Offer Applies For 100k and above datasets. Contact us for
            more details.
          </p>
        </div>
        <hr />
      </div>

      {/* Footer - outside */}
      <Footer />
    </>
  );
}
