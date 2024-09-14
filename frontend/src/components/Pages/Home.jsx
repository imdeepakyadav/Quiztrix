import { motion } from "framer-motion";
import { BookOpen, Brain, Trophy } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [email]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Wave background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
          animate={{ d: "M0,320L1440,160L1440,320L0,320Z" }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          fill="#ffffff"
          fillOpacity="0.3"
        />
      </svg>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Welcome to Quiztrix
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          The Interactive Quiz Platform
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <BookOpen className="h-8 w-8 mb-2" />, text: "Learn" },
            { icon: <Brain className="h-8 w-8 mb-2" />, text: "Challenge" },
            { icon: <Trophy className="h-8 w-8 mb-2" />, text: "Achieve" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold">{feature.text}</h2>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Started Now
          </h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
            </div>
            <Button
              type="submit"
              disabled={!isEmailValid}
              className="w-full bg-white text-purple-600 hover:bg-gray-100"
            >
              Join the Quiz Adventure
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
