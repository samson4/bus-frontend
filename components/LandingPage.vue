<template>
  <div>
    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-16 md:py-24">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-12">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600"
              >BUS</span
            >
            <span class="block">Backend Utility Service</span>
          </h1>
          <p class="text-xl text-gray-700 mb-8">
            The complete backend solution for modern applications. Build faster
            with authentication, databases, storage, and realtime features.
          </p>
          <div
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              @click="$emit('navigate', 'signup')"
              class="px-8 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white transition-all font-medium"
            >
              Get Started
            </button>
            <a
              href="#features"
              class="px-8 py-3 rounded-md border border-orange-300 hover:border-orange-500 transition-all font-medium text-center text-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>
        <div class="md:w-1/2 mt-12 md:mt-0">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-600/20 rounded-lg blur-xl"
            ></div>
            <div
              class="relative bg-white border border-orange-200 p-6 rounded-lg shadow-xl"
            >
              <pre class="text-gray-800 text-sm overflow-x-auto">
<span class="text-orange-600">const</span> <span class="text-amber-600">bus</span> = <span class="text-orange-600">new</span> <span class="text-amber-700">BUS</span>({
  <span class="text-orange-700">apiKey</span>: <span class="text-green-600">'your-api-key'</span>,
});

<span class="text-amber-600">bus</span>.<span class="text-amber-700">auth</span>.<span class="text-orange-700">signUp</span>({
  <span class="text-orange-700">email</span>: <span class="text-green-600">'user@example.com'</span>,
  <span class="text-orange-700">password</span>: <span class="text-green-600">'password'</span>,
});

<span class="text-orange-600">const</span> { <span class="text-orange-700">data</span>, <span class="text-orange-700">error</span> } = <span class="text-orange-600">await</span> <span class="text-amber-600">bus</span>
  .<span class="text-amber-700">from</span>(<span class="text-green-600">'users'</span>)
  .<span class="text-amber-700">select</span>(<span class="text-green-600">'*'</span>)
  .<span class="text-amber-700">where</span>(<span class="text-green-600">'active'</span>, <span class="text-green-600">'eq'</span>, <span class="text-orange-600">true</span>);
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-orange-100 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-orange-600">
              99.9%
            </div>
            <div class="text-gray-700 mt-2">Uptime</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-orange-600">
              50ms
            </div>
            <div class="text-gray-700 mt-2">Avg. Response</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-orange-600">
              10K+
            </div>
            <div class="text-gray-700 mt-2">Developers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-orange-600">
              24/7
            </div>
            <div class="text-gray-700 mt-2">Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="container mx-auto px-6 py-16 md:py-24">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Powerful Backend Services
        </h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Everything you need to build modern applications, all in one platform.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Authentication -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <Lock class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold mb-3">Authentication</h3>
          <p class="text-gray-700">
            Complete user management with email/password, social logins, and
            magic links. Secure and easy to implement.
          </p>
        </div>

        <!-- Database -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <Database class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold mb-3">Database</h3>
          <p class="text-gray-700">
            Instant RESTful API endpoints from your MySQL or PostgreSQL
            database. No additional code required.
          </p>
        </div>

        <!-- Storage -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <HardDrive class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold mb-3">Storage</h3>
          <p class="text-gray-700">
            Store and serve files with ease. Secure file uploads and downloads
            with customizable access controls.
          </p>
        </div>

        <!-- Realtime -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <Zap class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold mb-3">Realtime</h3>
          <p class="text-gray-700">
            Subscribe to database changes and build collaborative features with
            WebSockets and realtime events.
          </p>
        </div>

        <!-- Functions -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <Code class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold mb-3">Functions</h3>
          <p class="text-gray-700">
            Deploy serverless functions to extend your backend logic. Trigger on
            events or call directly from your app.
          </p>
        </div>

        <!-- Analytics -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <BarChart class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold mb-3">Analytics</h3>
          <p class="text-gray-700">
            Monitor usage, performance, and user behavior with built-in
            analytics. Make data-driven decisions.
          </p>
        </div>
      </div>
    </section>

    <!-- Database Support Section -->
    <section class="container mx-auto px-6 py-16">
      <div
        class="bg-white border border-orange-200 rounded-lg p-8 md:p-12 shadow-sm"
      >
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-12">
            <h2 class="text-3xl font-bold mb-4">Database Support</h2>
            <p class="text-xl text-gray-700 mb-6">
              BUS provides first-class support for both MySQL and PostgreSQL
              databases, giving you the flexibility to choose what works best
              for your application.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckCircle
                  class="h-6 w-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
                />
                <span class="text-gray-700"
                  >Automatic RESTful API generation</span
                >
              </li>
              <li class="flex items-start">
                <CheckCircle
                  class="h-6 w-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
                />
                <span class="text-gray-700">Row-level security policies</span>
              </li>
              <li class="flex items-start">
                <CheckCircle
                  class="h-6 w-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
                />
                <span class="text-gray-700">Realtime subscriptions</span>
              </li>
              <li class="flex items-start">
                <CheckCircle
                  class="h-6 w-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
                />
                <span class="text-gray-700"
                  >Migrations and version control</span
                >
              </li>
            </ul>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div class="grid grid-cols-2 gap-6">
              <div
                class="bg-orange-50 p-6 rounded-lg border border-orange-200 flex items-center justify-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/640px-Antu_mysql-workbench.svg.png"
                  alt="MySQL"
                  class="h-16"
                />
              </div>
              <div
                class="bg-orange-50 p-6 rounded-lg border border-orange-200 flex items-center justify-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                  alt="PostgreSQL"
                  class="h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="pricing" class="container mx-auto px-6 py-16 md:py-24">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Join thousands of developers building with BUS. Start for free,
          upgrade as you grow.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Free Plan -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="text-orange-700 uppercase text-sm font-bold tracking-wider mb-2"
          >
            Free
          </div>
          <div class="flex items-baseline mb-6">
            <span class="text-4xl font-bold">$0</span>
            <span class="text-gray-600 ml-2">/month</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Up to 10,000 API requests</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">500MB database storage</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">1GB file storage</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Community support</span>
            </li>
          </ul>
          <button
            @click="$emit('navigate', 'signup')"
            class="w-full px-4 py-2 rounded-md border border-orange-300 hover:border-orange-500 transition-all font-medium text-gray-700"
          >
            Get Started
          </button>
        </div>

        <!-- Pro Plan -->
        <div
          class="bg-white border border-orange-500 rounded-lg p-8 transform md:scale-105 relative shadow-md"
        >
          <div
            class="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg"
          >
            POPULAR
          </div>
          <div
            class="text-orange-600 uppercase text-sm font-bold tracking-wider mb-2"
          >
            Pro
          </div>
          <div class="flex items-baseline mb-6">
            <span class="text-4xl font-bold">$49</span>
            <span class="text-gray-600 ml-2">/month</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Up to 1M API requests</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">5GB database storage</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">10GB file storage</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Email support</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Multiple environments</span>
            </li>
          </ul>
          <button
            @click="$emit('navigate', 'signup')"
            class="w-full px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white transition-all font-medium"
          >
            Start Free Trial
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div
          class="bg-white border border-orange-200 rounded-lg p-8 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
        >
          <div
            class="text-orange-700 uppercase text-sm font-bold tracking-wider mb-2"
          >
            Enterprise
          </div>
          <div class="flex items-baseline mb-6">
            <span class="text-4xl font-bold">Custom</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Unlimited API requests</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Custom database storage</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Custom file storage</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">Dedicated support</span>
            </li>
            <li class="flex items-start">
              <Check
                class="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5"
              />
              <span class="text-gray-700">SLA & priority support</span>
            </li>
          </ul>
          <button
            class="w-full px-4 py-2 rounded-md border border-orange-300 hover:border-orange-500 transition-all font-medium text-gray-700"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container mx-auto px-6 py-16">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Developers
        </h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          See what our users are saying about BUS.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
            >
              <User class="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div class="font-bold">Sarah Johnson</div>
              <div class="text-sm text-gray-600">Frontend Developer</div>
            </div>
          </div>
          <p class="text-gray-700">
            "BUS has completely transformed our development workflow. We've cut
            our backend development time by 70% and can focus on building great
            user experiences."
          </p>
        </div>

        <div class="bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
            >
              <User class="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div class="font-bold">Michael Chen</div>
              <div class="text-sm text-gray-600">CTO, TechStart</div>
            </div>
          </div>
          <p class="text-gray-700">
            "The authentication and database features are rock solid. We
            migrated from Firebase and couldn't be happier with the performance
            and flexibility BUS provides."
          </p>
        </div>

        <div class="bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
            >
              <User class="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div class="font-bold">Alex Rodriguez</div>
              <div class="text-sm text-gray-600">Indie Developer</div>
            </div>
          </div>
          <p class="text-gray-700">
            "As a solo developer, BUS gives me enterprise-level backend
            capabilities without the complexity. The documentation is excellent
            and I was up and running in minutes."
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Lock,
  Database,
  HardDrive,
  Zap,
  Code,
  BarChart,
  CheckCircle,
  Check,
  User,
} from "lucide-vue-next";
</script>
