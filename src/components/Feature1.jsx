import { motion } from "motion/rect";

const Feature1 = () => {
  return (
    <div>
     
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: {
            type: "spring",
            stiffness: 200,
          },
        }}
        className="w-full lg:w-1/2 h-[320px] md:h-[400px] lg:h-[512px] bg-[#d9d9d9] rounded-xl md:rounded-2xl overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src='https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=""
          className="w-full h-full object-cover rounded-xl md:rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Feature1;
