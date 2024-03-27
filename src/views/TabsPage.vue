<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <slot name="bottom">
                <ion-tab-bar>
                    <ion-tab-button tab="tab1" href="/tabs/tab1">
                        <ion-icon :icon="triangle" />
                        <ion-label>Tab 1</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab2" href="/tabs/tab2">
                        <ion-icon :icon="ellipse" />
                        <ion-label>Tab 2</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab3" href="/tabs/tab3">
                        <ion-icon :icon="square" />
                        <ion-label>Tab 3</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </slot>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
    name: 'TabsPage',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
        };
    },
});
</script>
