import React from "react";
import { Button } from "././components/Button";
import { CheckboxFalse } from "././icons/CheckboxFalse";
import { EyeOff } from "././icons/EyeOff";

export const Login = () => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:2123"
    >
      <div className="bg-white w-[1440px] h-[1024px] relative">
        <div className="absolute w-[757px] h-[1024px] top-0 left-[683px] bg-[url(https://c.animaapp.com/eDacV2jz/img/mask-group.png)] bg-[100%_100%]">
          <div className="absolute w-[68px] h-2.5 top-[952px] left-[357px]">
            <div className="inline-flex items-start gap-2 relative">
              <div className="relative w-8 h-2.5 bg-p rounded-[5px]" />

              <div className="relative w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />

              <div className="relative w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
            </div>
          </div>

          <p className="absolute w-[490px] top-[883px] left-[152px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
            Stunning Stores For Your Brand
          </p>
        </div>

        <div className="flex flex-col w-[512px] items-start gap-4 absolute top-[204px] left-[104px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-t text-[40px] tracking-[0] leading-[normal]">
            Login
          </div>
        </div>

        <div className="flex flex-col w-[512px] items-start gap-10 absolute top-[304px] left-[104px]">
          <div className="flex flex-col w-[512px] h-14 items-start relative rounded-[4px_4px_0px_0px]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded border border-solid border-[#79747e]">
              <div className="flex items-center pl-4 pr-0 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                <div className="flex flex-col h-10 items-start justify-center relative flex-1 grow">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#1c1b1f] text-base tracking-[0] leading-[normal]">
                      09685749685
                    </div>
                  </div>

                  <div className="inline-flex items-center px-1 py-0 absolute -top-4 -left-1 bg-white">
                    <div className="text-[#1c1b1f] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-sm tracking-[0] leading-[normal]">
                      Business Phone Number
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[512px] h-14 items-start relative rounded-[4px_4px_0px_0px]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded border border-solid border-[#79747e]">
                <div className="flex items-center pl-4 pr-0 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                  <div className="flex flex-col h-10 items-start justify-center relative flex-1 grow">
                    <input
                      className="inline-flex items-center relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#1c1b1f] text-base tracking-[0] leading-[normal] p-0"
                      placeholder="john.doe@gmail.com"
                      type="email"
                    />

                    <div className="inline-flex items-center px-1 py-0 absolute -top-4 -left-1 bg-white">
                      <div className="text-[#1c1b1f] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-sm tracking-[0] leading-[normal]">
                        Business Mail id
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[512px] h-14 items-start relative rounded-[4px_4px_0px_0px]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded border border-solid border-[#79747e]">
                <div className="flex items-center pl-4 pr-0 py-1 relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                  <div className="flex flex-col h-10 items-start justify-center relative flex-1 grow">
                    <input
                      className="inline-flex items-center relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#1c1b1f] text-base tracking-[0] leading-[normal] p-0"
                      id="input-4"
                      placeholder="•••••••••••••••••••••••••"
                      type="text"
                    />

                    <div className="inline-flex items-center px-1 py-0 absolute -top-4 -left-1 bg-white">
                      <label
                        className="text-t relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-sm tracking-[0] leading-[normal]"
                        htmlFor="input-4"
                      >
                        Password
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col w-12 h-12 items-center justify-center gap-2.5 p-3 relative">
                    <EyeOff className="!relative !w-6 !h-6" color="#313131" />
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-[252px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <CheckboxFalse
                  className="!relative !w-6 !h-6"
                  color="#313131"
                />
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-t text-sm tracking-[0] leading-[normal]">
                  Remember me
                </div>
              </div>

              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ff8682] text-sm text-right tracking-[0] leading-[normal]">
                Forgot Password
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <Button
              changeIcon="none"
              className="!flex-[0_0_auto] !flex !w-[512px]"
              divClassName="!text-[#f3f3f3] !tracking-[0] !text-sm ![font-style:unset] !font-semibold ![font-family:'Poppins',Helvetica] !leading-[normal]"
              size="large"
              state="default"
              styleLayerClassName="!self-stretch !flex !bg-p !w-full"
              text="Login"
              type="filled"
            />
            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-[normal]">
              <span className="font-medium text-[#303030]">
                Don’t have an account?{" "}
              </span>

              <span className="font-semibold text-[#ff8682]">Sign up</span>
            </p>
          </div>
        </div>

        <div className="absolute w-[327px] h-[53px] top-[51px] left-[62px]">
          <img
            className="absolute w-[33px] h-[43px] top-1 left-0"
            alt="Group"
            src="https://c.animaapp.com/eDacV2jz/img/group-47602@2x.png"
          />

          <div className="absolute top-0 left-[46px] [font-family:'Red_Hat_Display',Helvetica] font-bold text-t text-[35.3px] tracking-[-0.35px] leading-[53.0px] whitespace-nowrap">
            Emmersive Souq
          </div>
        </div>
      </div>
    </div>
  );
};
