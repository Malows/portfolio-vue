<template lang="pug">
  div
    service-container
      service-item(icon="terminal", title="Web development", description="some fancy description too")
      service-item(icon="cogs", title="Integration & Automation", description="some fancy description too")
      service-item(icon="bolt", title="Performance", description="some fancy description too")
    portfolio-container
      portfolio-item(img-url="https://placekitten.com/450/450" img-alt="test image" title="Test 1" activity="web dev")
      portfolio-item(img-url="https://placekitten.com/450/450" img-alt="test image" title="Test 2" activity="game dev")
      portfolio-item(img-url="https://placekitten.com/450/450" img-alt="test image" title="Test 3" activity="backend dev")
      portfolio-item(img-url="https://placekitten.com/450/450" img-alt="test image" title="Test 4" activity="fullstack dev")
      portfolio-item(img-url="https://placekitten.com/450/450" img-alt="test image" title="Test 5" activity="movile app dev")
      portfolio-item(img-url="https://placekitten.com/450/450" img-alt="test image" title="Test 6" activity="Organization and hosting")
</template>

<script>
import ServiceContainer from '~/components/services/ServiceContainer.vue'
import ServiceItem from '~/components/services/ServiceItem.vue'
import PortfolioContainer from '~/components/portfolio/PortfolioContainer.vue'
import PortfolioItem from '~/components/portfolio/PortfolioItem.vue'

export default {
  components: {
    PortfolioContainer,
    PortfolioItem,
    ServiceContainer,
    ServiceItem
  }
}
</script>

<style>
</style>
