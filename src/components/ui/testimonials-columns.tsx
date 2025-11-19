import React from "react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    image: string;
    name: string;
    role: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <div
        className="flex flex-col gap-6 pb-6"
        style={{
          animation: `scroll ${props.duration || 10}s linear infinite`,
        }}
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-6 sm:p-8 rounded-xl border-2 border-[#0080ff] bg-gradient-to-br from-[#e0eeff] to-[#f3f4f6] shadow-lg shadow-[rgba(0,128,255,0.15)] max-w-xs w-full hover:shadow-xl hover:shadow-[rgba(0,128,255,0.25)] transition-all duration-300"
                key={`${index}-${i}`}
              >
                <div className="text-[#1f2937] text-sm sm:text-base leading-relaxed font-medium">
                  "{text}"
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover border border-[#0080ff]"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-[#0066cc] text-sm">
                      {name}
                    </div>
                    <div className="text-xs opacity-70 text-[#6b7280] font-medium">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};
