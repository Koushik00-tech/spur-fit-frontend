import { useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap";

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Animate the element with GSAP
    TweenMax.to(elementRef.current, 1, {
      x: 100,
      opacity: 0.5,
      rotation: 360,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#Home"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="https://ik.imagekit.io/Satish108/spur-fit-company/images%20(3).jpg?updatedAt=1708231034124"
            alt="logo"
            className="w-12 h-12 mr-2 rounded"
          />
        </a>
        <div className="footer-text flex justify-center">
          <p class="my-6 text-gray-500 dark:text-gray-400 pr-5">
            AuguststraBe 26, 10117 Berlin
          </p>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            koushik.koppolu00@gmail.com
          </p>
        </div>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#Home" class="hover:underline">
            Ahead™ Koushik Koppolu
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default MyComponent;
