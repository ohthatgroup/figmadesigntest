import React from "react";
import { Button } from "../../components/Button";
import { CategoryButton } from "../../components/CategoryButton";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Product } from "../../components/Product";
import { IconLinkedin } from "../../icons/IconLinkedin";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="chrome-browsers">
        <div className="overlap-group-2">
          <div className="right-locked-icons">
            <div className="icon-more">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-9.svg"
              />
            </div>
            <img
              className="mask-group"
              alt="Mask group"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/mask-group@2x.png"
            />
          </div>
          <div className="URL-bar">
            <div className="icon-favorite-star">
              <img
                className="vector-2"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-8.svg"
              />
            </div>
            <div className="icon-secure">
              <img
                className="vector-3"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-7.svg"
              />
            </div>
            <div className="URL-text">
              <div className="text-content">
                <a
                  className="https-brixtemplates"
                  href="https://brixtemplates.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://eclipsusa.com
                </a>
              </div>
            </div>
          </div>
          <div className="left-icons">
            <div className="icon-home">
              <img
                className="container"
                alt="Container"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/container.svg"
              />
            </div>
            <img
              className="icon-refresh"
              alt="Icon refresh"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon-refresh.svg"
            />
            <img
              className="icon-arrow"
              alt="Icon arrow"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon-arrow-2.svg"
            />
            <img
              className="icon-arrow-2"
              alt="Icon arrow"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon-arrow-1.svg"
            />
          </div>
        </div>
        <div className="overlap">
          <div className="main-bar">
            <div className="option">
              <div className="option-expand" />
              <div className="option-minimize" />
              <div className="option-close" />
            </div>
          </div>
          <div className="main-tab">
            <div className="tab">
              <img
                className="curve"
                alt="Curve"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/curve-1.svg"
              />
              <div className="container-2">
                <img
                  className="logo-2"
                  alt="Logo"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/logo-1@2x.png"
                />
                <div className="text">Eclips USA</div>
                <img
                  className="img-2"
                  alt="Icon close"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon-close.svg"
                />
              </div>
              <img
                className="curve"
                alt="Curve"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/curve-2.svg"
              />
            </div>
            <img
              className="img-3"
              alt="Icon new tab"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon-new-tab.svg"
            />
          </div>
        </div>
      </div>
      <Menu
        frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-5.svg"
        logo="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/logo@2x.png"
      />
      <div className="frame-12">
        <img
          className="text-section"
          alt="Text section"
          src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/text-section.png"
        />
        <div className="image-section">
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/image-1.png"
          />
          <img
            className="image-2"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/image-2.png"
          />
        </div>
      </div>
      <div className="frame-13">
        <div className="frame-14">
          <div className="text-wrapper-9">Browse Our Top Categories</div>
          <div className="frame-15">
            <div className="text-wrapper-10">View All</div>
            <img
              className="vector-4"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-6.svg"
            />
          </div>
        </div>
        <div className="frame-16">
          <div className="frame-17">
            <CategoryButton
              binder="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-5@2x.png"
              categoryName="School Supplies"
              frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-5.svg"
              group="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-5@2x.png"
            />
            <CategoryButton
              binder="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-4@2x.png"
              categoryName="Writing Instruments"
              frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-4.svg"
              group="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-5@2x.png"
            />
            <CategoryButton
              binder="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-3@2x.png"
              categoryName="Art Supplies"
              frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-4.svg"
              group="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-5@2x.png"
            />
          </div>
          <div className="frame-17">
            <CategoryButton
              binder="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-3@2x.png"
              categoryName="Binders and Folders"
              frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-4.svg"
              group="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-5@2x.png"
            />
            <CategoryButton
              binder="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-5@2x.png"
              categoryName="Paper Products"
              frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-5.svg"
              group="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-5@2x.png"
            />
            <CategoryButton
              binder="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-4@2x.png"
              categoryName="Teacher and Student Kits"
              frame="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-5.svg"
              group="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-5@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="frame-18">
        <img
          className="group-3"
          alt="Group"
          src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-6.png"
        />
        <div className="frame-19">
          <p className="p">Discover the E Clips USA Difference</p>
          <img
            className="line-3"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-7.svg"
          />
          <p className="at-e-clips-USA-we-re">
            At E Clips USA, we&#39;re passionate about providing quality stationery products that meet the needs of our
            customers. Our story began with a mission to create the perfect pencil, and has since expanded to include a
            full range of stationery items.
            <br />
            Our founders started E Clips USA with a dedication to providing reliable and innovative stationery products.
            Our commitment to quality, affordability, and customer satisfaction is at the heart of everything we do.
          </p>
          <Button
            blue={false}
            className="design-component-instance-node"
            iconPosition="no-icon"
            small={false}
            style="primary"
            text="Learn More"
          />
        </div>
      </div>
      <div className="frame-20">
        <div className="frame-21">
          <div className="frame-22">
            <div className="frame-23">
              <img
                className="image-3"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/image-13.png"
              />
              <img
                className="line-4"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-6.svg"
              />
            </div>
            <div className="frame-24">
              <div className="frame-25">
                <img
                  className="brand-logos"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-9@2x.png"
                />
                <img
                  className="brand-logos-2"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-8.svg"
                />
                <img
                  className="brand-logos-3"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-7.svg"
                />
                <img
                  className="brand-logos-4"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-6@2x.png"
                />
                <img
                  className="brand-logos-5"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-5.svg"
                />
              </div>
              <div className="frame-25">
                <img
                  className="brand-logos-6"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-4@2x.png"
                />
                <img
                  className="brand-logos-7"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-3@2x.png"
                />
                <img
                  className="brand-logos-8"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-2.svg"
                />
                <img
                  className="brand-logos-9"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos-1.svg"
                />
                <img
                  className="brand-logos-10"
                  alt="Brand logos"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/brand-logos.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-26">
        <div className="frame-27">
          <h1 className="h-1">Search From Our Top-Rated Products</h1>
          <img
            className="line-5"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-5.svg"
          />
          <div className="text-input-2">
            <div className="frame-28">
              <div className="text-wrapper-11">Search products</div>
            </div>
            <img
              className="button-5"
              alt="Button"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/button.svg"
            />
          </div>
        </div>
        <div className="frame-29">
          <div className="row-2">
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-16@2x.png"
              iconChevronRight="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon---chevron-right-1.svg"
              img="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-5-1.svg"
              line="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-4-1.svg"
              pointer="hover"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-15@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-14@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-13@2x.png"
              pointer="none"
            />
            <img
              className="vector-5"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-5@2x.png"
            />
          </div>
          <div className="row-2">
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-16@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-13@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-14@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-15@2x.png"
              pointer="none"
            />
          </div>
          <div className="row-2">
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-15@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-14@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-13@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-16@2x.png"
              pointer="none"
            />
          </div>
          <div className="row-2">
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-13@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-16@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-15@2x.png"
              pointer="none"
            />
            <Product
              element="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-14@2x.png"
              pointer="none"
            />
          </div>
        </div>
      </div>
      <div className="about">
        <img
          className="group-4"
          alt="Group"
          src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-38.png"
        />
        <div className="about-text">
          <div className="frame-30">
            <div className="frame-31">
              <p className="text-wrapper-12">All Your School Needs In One Place.</p>
              <img
                className="line-3"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-4.svg"
              />
            </div>
            <div className="frame-32">
              <p className="text-wrapper-13">
                Discover a trusted and reliable source for top-notch school supplies that go above and beyond to meet
                the unique needs of educational institutions. At E Clips USA, we are passionate about supporting your
                school&#39;s success with our comprehensive kits for students and teachers, exceptional customer
                service, and a commitment to providing high-quality products that enhance the learning experience.
              </p>
              <div className="frame-33">
                <div className="frame-34">
                  <img
                    className="group-5"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-1@2x.png"
                  />
                  <p className="heading">Extensive catalog of tailored school supplies</p>
                </div>
                <div className="frame-34">
                  <img
                    className="vector-6"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-4.svg"
                  />
                  <p className="heading-2">Complete kits for students and teachers</p>
                </div>
                <div className="frame-34">
                  <img
                    className="img-2"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-3.svg"
                  />
                  <p className="heading-3">Dedicated customer service for school procurement needs</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            blue={false}
            className="design-component-instance-node"
            iconPosition="no-icon"
            small={false}
            style="primary"
            text="Get in touch"
          />
        </div>
      </div>
      <div className="about">
        <div className="about-text">
          <div className="frame-30">
            <div className="frame-31">
              <div className="text-wrapper-14">Reliable Solutions for Organizations</div>
              <img
                className="line-3"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-3.svg"
              />
            </div>
            <div className="frame-32">
              <p className="text-wrapper-13">
                At E Clips USA, we offer organizations in the education sector a comprehensive range of high-quality
                school supplies. With a focus on timely delivery and exceptional customer service, we strive to meet the
                unique needs of organizations by providing efficient and reliable solutions. Partner with us to
                streamline your school supply procurement process and ensure that your organization has access to the
                products it needs when it needs them.
              </p>
              <div className="frame-33">
                <div className="frame-34">
                  <img
                    className="vector-6"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-2.svg"
                  />
                  <p className="heading-4">Extensive catalog of high-quality school supplies</p>
                </div>
                <div className="frame-34">
                  <img
                    className="group-6"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-66@2x.png"
                  />
                  <p className="heading-5">Fast and efficient shipping for large orders</p>
                </div>
                <div className="frame-34">
                  <img
                    className="vector-7"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector-1.svg"
                  />
                  <p className="heading-6">Dedicated account manager for personalized support</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            blue={false}
            className="design-component-instance-node"
            iconPosition="no-icon"
            small={false}
            style="primary"
            text="Get in touch"
          />
        </div>
        <div className="group-7">
          <div className="overlap-group-3">
            <img
              className="group-8"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-37.png"
            />
            <div className="frame-35">
              <div className="text-wrapper-15">Eu vestibulum</div>
            </div>
            <div className="frame-36">
              <div className="text-wrapper-15">Faucibus risus</div>
            </div>
            <div className="frame-37">
              <div className="text-wrapper-15">Volutpat scelerisque</div>
            </div>
            <div className="frame-38">
              <div className="text-wrapper-15">Aliquam faucibus</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="group-7">
          <div className="overlap-2">
            <div className="group-9">
              <div className="overlap-group-4">
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/rectangle-31@2x.png"
                />
                <img
                  className="rectangle-5"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/rectangle-32@2x.png"
                />
              </div>
            </div>
            <div className="frame-39">
              <div className="text-wrapper-15">Eu vestibulum</div>
            </div>
            <div className="frame-40">
              <div className="text-wrapper-15">Faucibus risus</div>
            </div>
            <div className="frame-41">
              <div className="text-wrapper-15">Volutpat scelerisque</div>
            </div>
            <div className="frame-42">
              <div className="text-wrapper-15">Aliquam faucibus</div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="frame-30">
            <div className="frame-31">
              <p className="text-wrapper-12">Your Partner for Retail Success</p>
              <img
                className="line-3"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-2.svg"
              />
            </div>
            <div className="frame-32">
              <p className="text-wrapper-13">
                E Clips USA is your reliable partner for all your stationery retail needs. With a wide range of
                high-quality products, competitive pricing, and scalable solutions, we are committed to helping you
                achieve retail success. From pencils to art supplies, we provide the inventory and support you need to
                thrive in the stationery market.
              </p>
              <div className="frame-33">
                <div className="frame-34">
                  <img
                    className="group-10"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group@2x.png"
                  />
                  <p className="heading-5">Stationery products for diverse customer demands</p>
                </div>
                <div className="frame-34">
                  <div className="text-wrapper-16">$</div>
                  <div className="heading-5">Competitive pricing and promotions</div>
                </div>
                <div className="frame-34">
                  <img
                    className="group-11"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-67@2x.png"
                  />
                  <p className="heading-5">Scalable solutions for efficient order fulfillment</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            blue={false}
            className="design-component-instance-node"
            iconPosition="no-icon"
            small={false}
            style="primary"
            text="Get in touch"
          />
        </div>
      </div>
      <div className="frame-43">
        <div className="frame-44">
          <p className="text-wrapper-17">All your School needs in one place</p>
          <img
            className="line-3"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1-1.svg"
          />
          <p className="discover-a-wide">
            <span className="text-wrapper-18">
              Discover a wide range of high-quality school and office supplies at E Clips USA. From pencils and paper to
              complete kits for students and teachers, we have everything you need to succeed. Shop with us today and
              experience convenience, quality, and value!
              <br />
              <br />
            </span>
            <span className="text-wrapper-19">Shop Now for Quality Supplies!</span>
          </p>
        </div>
        <div className="frame-45">
          <div className="group-12">
            <div className="p-wrapper">
              <p className="heading-gear-up-for">
                Heading: Gear Up for Success!
                <br />
                Subheading: Quality School Supplies for Every Student
              </p>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="p-wrapper">
              <p className="heading-boost-your">
                Heading: Boost Your Productivity!
                <br />
                Subheading: Reliable Office Supplies for Efficient Workspaces
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-46">
        <div className="frame-47">
          <div className="text-wrapper-20">Exclusive Discounts and Promotions</div>
          <img
            className="line-5"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-1.svg"
          />
        </div>
        <div className="frame-48">
          <div className="div-3">
            <div className="div-3">
              <img
                className="element-5"
                alt="Element"
                src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597@2x.png"
              />
              <div className="frame-49">
                <div className="frame-50">
                  <div className="text-wrapper-21">Eclips</div>
                </div>
                <div className="frame-51">
                  <p className="text-wrapper-22">Crayola Chalk | White | 12 Count</p>
                  <div className="frame-52">
                    <Button
                      blue
                      buttonClassName="button-7"
                      className="button-6"
                      iconPosition="no-icon"
                      small={false}
                      style="primary"
                      text="4.99$"
                    />
                    <div className="text-wrapper-23">Case Price: 44$</div>
                  </div>
                </div>
              </div>
              <div className="group-13">
                <div className="overlap-group-5">
                  <div className="text-wrapper-24">50% off</div>
                </div>
              </div>
            </div>
          </div>
          <div className="selected-product">
            <img
              className="element-w"
              alt="Element"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/16783w@2x.png"
            />
            <div className="frame-49">
              <div className="frame-50">
                <div className="text-wrapper-21">Eclips</div>
              </div>
              <div className="frame-53">
                <p className="text-wrapper-22">Crayola Chalk | White | 12 Count</p>
                <div className="frame-54">
                  <div className="frame-55">
                    <div className="text-input-3">
                      <div className="text-wrapper-25">44</div>
                      <div className="group-14">
                        <div className="overlap-group-6">
                          <div className="frame-56">
                            <div className="text-wrapper-26">−</div>
                            <div className="text-wrapper-27">+</div>
                          </div>
                          <img
                            className="line-6"
                            alt="Line"
                            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-4.svg"
                          />
                          <img
                            className="line-7"
                            alt="Line"
                            src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-23">MCQ: 44</div>
                  </div>
                  <div className="frame-55">
                    <div className="button-8">
                      <div className="button-9">4.99$</div>
                      <img
                        className="img-3"
                        alt="Icon chevron right"
                        src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon---chevron-right.svg"
                      />
                    </div>
                    <div className="text-wrapper-23">Case Price: 0.56$</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="vector-8"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/vector@2x.png"
            />
            <div className="group-13">
              <div className="overlap-group-5">
                <div className="text-wrapper-24">50% off</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <img
              className="element-5"
              alt="Element"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37533w@2x.png"
            />
            <div className="frame-49">
              <div className="frame-50">
                <div className="text-wrapper-21">Eclips</div>
              </div>
              <div className="frame-51">
                <p className="text-wrapper-22">Crayola Chalk | White | 12 Count</p>
                <Button blue className="button-10" iconPosition="no-icon" small={false} style="primary" text="4.99$" />
              </div>
            </div>
            <div className="group-13">
              <div className="overlap-group-5">
                <div className="text-wrapper-24">50% off</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <img
              className="element-6"
              alt="Element"
              src="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/49450w@2x.png"
            />
            <div className="frame-49">
              <div className="frame-50">
                <div className="text-wrapper-21">Eclips</div>
              </div>
              <div className="frame-51">
                <p className="text-wrapper-22">Crayola Chalk | White | 12 Count</p>
                <Button blue className="button-10" iconPosition="no-icon" small={false} style="primary" text="4.99$" />
              </div>
            </div>
            <div className="group-15">
              <div className="overlap-group-5">
                <div className="text-wrapper-24">50% off</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-57">
        <div className="rectangle-6" />
        <div className="group-16">
          <p className="text-wrapper-28">Read what our customers have to say!</p>
          <div className="group-17">
            <div className="frame-58">
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-29">“Love the quality of their pens!”</p>
                  <p className="text-wrapper-30"> - John, school principal</p>
                </div>
              </div>
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-29">“I always find what I need at E Clips USA”</p>
                  <p className="text-wrapper-30"> - Sarah, small business owner</p>
                </div>
              </div>
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-29">“Their customer service is top-notch”</p>
                  <p className="text-wrapper-30"> - Michael, non-profit director</p>
                </div>
              </div>
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-29">“Love the quality of their pens!”</p>
                  <p className="text-wrapper-30"> - John, school principal</p>
                </div>
              </div>
            </div>
            <div className="frame-60">
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-29">I was impressed by their selection and prices”</p>
                  <div className="text-wrapper-30">- Lisa, retail customer</div>
                </div>
              </div>
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-31">“E Clips USA makes ordering bulk supplies a breeze”</p>
                  <div className="text-wrapper-30">- Kevin, purchasing manager</div>
                </div>
              </div>
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-31">“Their customized solutions saved our organization time and money”</p>
                  <div className="text-wrapper-30">- Amanda, operations manager</div>
                </div>
              </div>
              <div className="frame-59">
                <div className="frame-31">
                  <p className="text-wrapper-29">“Love the quality of their pens!”</p>
                  <p className="text-wrapper-30"> - John, school principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        cardClassName="icon-linkedin-wrapper"
        className="footer-instance"
        column="https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/column-1.svg"
        columnClassName="icon-linkedin-instance-wrapper"
        creditsClassName="icon-linkedin-wrapper"
        footerLinksClassName="footer-3"
        icon={<IconLinkedin className="icon-linkedin" />}
        linkEightClassName="footer-2"
        linkNineClassName="footer-2"
        linkOneClassName="footer-2"
        linkSevenClassName="footer-2"
        linkSixClassName="footer-2"
        linkThreeClassName="footer-2"
        linkTwoClassName="footer-2"
        linksGroupClassName="footer-2"
        linksGroupClassNameOverride="footer-2"
        property1="default"
      />
    </div>
  );
};
