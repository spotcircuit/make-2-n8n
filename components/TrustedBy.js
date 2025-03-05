import React from 'react';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600">
            Trusted by automation professionals from companies like
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8 items-center">
            {/* Make.com logo */}
            <div className="h-12 w-auto">
              <Image
                src="/images/logos/make.svg"
                alt="Make.com"
                width={120}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            
            {/* n8n logo */}
            <div className="h-12 w-auto">
              <Image
                src="/images/logos/n8n.svg"
                alt="n8n"
                width={120}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            
            {/* Zapier logo */}
            <div className="h-12 w-auto">
              <Image
                src="/images/logos/zapier.svg"
                alt="Zapier"
                width={120}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            
            {/* Integromat logo */}
            <div className="h-12 w-auto">
              <Image
                src="/images/logos/integromat.svg"
                alt="Integromat"
                width={120}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            
            {/* Automate.io logo */}
            <div className="h-12 w-auto">
              <Image
                src="/images/logos/automate-io.svg"
                alt="Automate.io"
                width={120}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
