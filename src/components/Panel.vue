<template>
    <div>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
        <div class="header">
            <slot name="footer">更多信息</slot>
        </div>
    </div>
</template>