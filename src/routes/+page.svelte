<script>
  import { Icon } from 'svelte-ionicons'
  import MarbleLogoText from '$lib/assets/logo-with-text.svg'
</script>

<svelte:head>
  <title>Marble Language</title>
</svelte:head>

<div class="w-screen h-screen bg-jet">
  <div class="flex flex-col items-center justify-center h-full space-y-8">
    <img alt="Marble logo" src={MarbleLogoText} />
    <h1 class="text-4xl font-bold text-white">A simple and powerful .NET language</h1>
    <p class="text-2xl text-white text-center w-96">
      Coming soon.<br>In the meantime, check out the GitHub for more information.<br>Or, contact us at the email below.
    </p>
    <div class="flex space-x-12">
      <a href="https://github.com/marblelang">
        <Icon name="logo-github" width="96" height="96" class="text-white" />
      </a>
      <a href="mailto:contact@marblelang.net">
        <Icon name="mail" width="96" height="96" class="text-white" />
      </a>
    </div>
  </div>
</div>
