/*:
 * @plugindesc v.1.3.0 [MV|MZ] [LITE] Adds video to the title screen, credits, the layers on the map and other.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @orderAfter DKTools
 * @orderAfter DK_Game_Time
 * @help

 ### Info about plugin ###
 Title: DK_Video_Player
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Contacts: https://dk-plugins.ru/contacts
 Version: 1.3.0
 Release: 12.09.2024
 First release: 17.02.2021

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Compatibility with other plugins
 ###=========================================================================
 For compatibility to work properly,
 plugins from the following list must be placed ABOVE:
 DKTools.js
 DK_Game_Time.js

 ###=========================================================================
 ## Video formats
 ###=========================================================================
 To ensure the correct operation of the plugin and compatibility across various
 browsers and platforms, it is recommended to use video files in the following formats:

 MP4: The MP4 format with the H.264 video codec and AAC audio codec is
 the most widely supported format. It offers good video and audio quality
 and high compatibility with most browsers and devices.

 WebM: The WebM format with VP8 or VP9 video codecs and Opus or Vorbis
 audio codecs is also well-supported by modern browsers and can be used
 as an alternative to MP4.

 Please note that not all codecs within these formats may be equally supported.
 For example, MP4 with the H.265 (HEVC) codec may not play on all devices.

 It is recommended to test the playability of videos before using them
 in your project to avoid compatibility issues.

 ###=========================================================================
 ## Instructions
 ###=========================================================================
 Before calling the PlayVideo plugin command, you must call the LoadVideo
 command to load the video onto the layer (preload to memory)!

 # Important! Difference between LoadVideo and PreloadVideo commands #
 LoadVideo - loads a video to the layer, and this video is only available on this map.
 When moving to another map, starting a battle, exiting to the menu, etc.
 the video will be cleared from memory!
 PreloadVideo - preloads the video into memory before the first call to LoadVideo with the same name,
 i.e. it will be stored between any maps, battles and other transitions.
 As soon as you call LoadVideo with the same name, the preloaded video will be
 placed on the specified layer and removed from the cache!

 ## Using video as map parallax ##
 In the map notes, write <videoParallax: filename>
 filename - Video filename without extension
 Example: <videoParallax: map_parallax_video>

 For parallax looping, use the built-in looping settings in the map options

 ###=========================================================================
 ## Plugin commands (RPG Maker MV)
 ###=========================================================================
 1. Load video onto layer: LoadVideo LAYER SRC
 LAYER - Layer. Calculated with Javascript.
 SRC - Video source. Without "movies/" and file extension.
 Example: LoadVideo 1 dialog1
 Example: LoadVideo $gameVariables.value(1) dialog1

 2. Play video (must be pre-loaded on the layer): PlayVideo LAYER LOOP WAIT
 LAYER - Layer. Calculated with Javascript.
 LOOP - Loop video (true, false)
 WAIT - Wait for playing (true, false)
 Example: PlayVideo 1 true false
 Example: PlayVideo $gameVariables.value(1) false true

 3. Pause video: PauseVideo LAYER
 LAYER - Layer. Calculated with Javascript.
 Example: PauseVideo 1
 Example: PauseVideo $gameVariables.value(1)

 4. Resume video: ResumeVideo LAYER
 LAYER - Layer. Calculated with Javascript.
 Example: ResumeVideo 1
 Example: ResumeVideo $gameVariables.value(1)

 5. Stop video: StopVideo LAYER
 LAYER - Layer. Calculated with Javascript.
 Example: StopVideo 1
 Example: StopVideo $gameVariables.value(1)

 6. Replace video on the layer*: ReplaceVideo LAYER SRC LOOP WAIT
 *note: The change occurs after a new video is loaded and the previous video ends.
 LAYER - Layer. Calculated with Javascript.
 SRC - Video source. Without "movies/" and file extension.
 LOOP - Loop video (true, false)
 WAIT - Wait for playing (true, false)
 Example: ReplaceVideo 1 dialog1 true false
 Example: ReplaceVideo $gameVariables.value(1) dialog1 true false

 7. Set video volume: SetVideoVolume LAYER VOLUME
 LAYER - Layer. Calculated with Javascript.
 VOLUME - Volume. Calculated with Javascript.
 Example: SetVideoVolume 1 100
 Example: SetVideoVolume $gameVariables.value(1) $gameVariables.value(2)

 8. Set video speed: SetVideoSpeed LAYER SPEED
 LAYER - Layer. Calculated with Javascript.
 SPEED - Video speed. Calculated with Javascript.
 Example: SetVideoSpeed 1 150
 Example: SetVideoSpeed $gameVariables.value(1) $gameVariables.value(2)

 9. Set video blend mode: SetVideoBlendMode LAYER BLEND_MODE
 LAYER - Layer. Calculated with Javascript.
 BLEND_MODE - Blend mode (NORMAL, ADD, MULTIPLY, SCREEN)
 Example: SetVideoBlendMode 1 ADD
 Example: SetVideoBlendMode $gameVariables.value(1) MULTIPLY

 10. Set video pivot: SetVideoPivot LAYER PIVOT
 LAYER - Layer. Calculated with Javascript.
 PIVOT - Pivot (0 - upper left, 0.5 - center)
 Example: SetVideoPivot 1 0.5
 Example: SetVideoPivot $gameVariables.value(1) $gameVariables.value(2)

 11. Move video: MoveVideo LAYER X Y DURATION
 LAYER - Layer. Calculated with Javascript.
 X - X. Calculated with Javascript.
 Y - Y. Calculated with Javascript.
 DURATION - Duration in frames. 0 - Immediately. Calculated with Javascript.
 Example: MoveVideo 1 100 100 0
 Example: MoveVideo $gameVariables.value(1) $gameVariables.value(2) $gameVariables.value(3) $gameVariables.value(4)

 12. Change video opacity: ChangeVideoOpacity LAYER OPACITY DURATION
 LAYER - Layer. Calculated with Javascript.
 OPACITY - Opacity. Calculated with Javascript.
 DURATION - Duration in frames. 0 - Immediately. Calculated with Javascript.
 Example: ChangeVideoOpacity 1 128 60
 Example: ChangeVideoOpacity $gameVariables.value(1) $gameVariables.value(2) $gameVariables.value(3)

 13. Change video scale: ChangeVideoScale LAYER X Y DURATION
 LAYER - Layer. Calculated with Javascript.
 X - Scale X. Calculated with Javascript.
 Y - Scale Y. Calculated with Javascript.
 DURATION - Duration in frames. 0 - Immediately. Calculated with Javascript.
 Example: ChangeVideoScale 1 50 50 60
 Example: ChangeVideoScale $gameVariables.value(1) $gameVariables.value(2) $gameVariables.value(3) $gameVariables.value(4)

 14. Stop all video: StopAllVideo

 15. Place the video player in front of the images layer: PlaceVideoPlayerBeforePictures

 16. Place video player after images layer: PlaceVideoPlayerAfterPictures

 17. Reset layer (position, opacity, volume, etc.): ResetVideoLayer LAYER
 LAYER - Layer. Calculated with Javascript.
 Example: ResetVideoLayer 1
 Example: ResetVideoLayer $gameVariables.value(1)

 19. Check codec support: CheckVideoCodecSupport showMessage
 showMessage - Show message about supported codecs (true, false)
 Example: CheckVideoCodecSupport true
 Example: CheckVideoCodecSupport false

 19. Preload the video: PreloadVideo SRC
 SRC - Video source. Without "movies/" and file extension.
 Example: PreloadVideo dialog1

 ###=========================================================================
 ## Get more features
 ###=========================================================================
 Additional features in the PRO version:
 - Ability to wait for all videos to load before playing.
 - Settings for video playback during battle.
 - GIF playback.

 More details: https://dk-plugins.ru/video-player/

 ###=========================================================================
 ## See also
 ###=========================================================================
 1. Game Time (https://dk-plugins.ru/game-time/)
 Time system.

 2. Globals (https://dk-plugins.ru/globals/)
 Allows you to specify variables and switches that will be "global" to all player saves.
 Changes are saved in a separate file and applied when starting a new game or loading any save.

 3. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 4. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 5. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 ###=========================================================================
 ## License and terms of use
 ###=========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Support
 ###=========================================================================
 Become a subscriber on boosty: https://boosty.to/dkplugins
 Become a subscriber on patreon: https://patreon.com/dkplugins
 Donate: https://dk-plugins.ru/donate



 * @command LoadVideo
 * @text Load Video
 * @desc Loads the video onto the layer
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg src
 * @text Video source
 * @desc Video source. Without "movies/" and file extension.

 * @command PlayVideo
 * @text Play Video
 * @desc Plays the video (needs to be pre-loaded on layer)
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg loop
 * @text Loop
 * @desc Loop video ?
 * @type boolean
 * @default false
 *
 * @arg wait
 * @text Wait
 * @desc Wait for playing
 * @type boolean
 * @default false

 * @command PauseVideo
 * @text Pause Video
 * @desc Pauses the video
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command ResumeVideo
 * @text Resume Video
 * @desc Resumes the video
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command StopVideo
 * @text Stop video
 * @desc Stops the video
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command ReplaceVideo
 * @text Replace Video
 * @desc Replaces the video. The video changes at the end of the previous one.
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg src
 * @text Video source
 * @desc Video source. Without "movies/" and file extension.
 *
 * @arg loop
 * @text Loop
 * @desc Loop video ?
 * @type boolean
 * @default false
 *
 * @arg wait
 * @text Wait
 * @desc Wait for playing
 * @type boolean
 * @default false

 * @command SetVideoVolume
 * @desc Sets the video volume
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg volume
 * @text Volume
 * @desc Volume. Default: 100
 * @default 100

 * @command SetVideoSpeed
 * @desc Sets the video speed
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg speed
 * @text Speed
 * @desc Speed. Default: 100
 * @default 100

 * @command SetVideoBlendMode
 * @desc Sets the video blend mode
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg blendMode
 * @text Blend mode
 * @desc Blend mode
 * @type select
 * @option normal
 * @value NORMAL
 * @option add
 * @value ADD
 * @option multiply
 * @value MULTIPLY
 * @option screen
 * @value SCREEN
 * @default NORMAL

 * @command SetVideoPivot
 * @desc Sets the video pivot
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg pivot
 * @text Pivot
 * @desc Pivot
 * @type select
 * @option Upper left
 * @value 0
 * @option Center
 * @value 0.5
 * @default 0

 * @command MoveVideo
 * @text Move Video
 * @desc Moves the video
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg x
 * @text X
 * @desc X. Calculated with Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0
 *
 * @arg y
 * @text Y
 * @desc Y. Calculated with Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0
 *
 * @arg duration
 * @text Duration
 * @desc Duration in frames. 0 - Immediately. Calculated with Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0

 * @command ChangeVideoOpacity
 * @desc Changes the video opacity
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg opacity
 * @text Opacity
 * @desc Opacity. Calculated with Javascript.
 * @type combo
 * @option 255
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 255
 *
 * @arg duration
 * @text Duration
 * @desc Duration in frames. 0 - Immediately. Calculated with Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0

 * @command ChangeVideoScale
 * @desc Changes the video scale
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg x
 * @text X
 * @desc X. Calculated with Javascript.
 * @type combo
 * @option 100
 * @option 50
 * @option 150
 * @option $gameVariables.value(ID)
 * @default 100
 *
 * @arg y
 * @text Y
 * @desc Y. Calculated with Javascript.
 * @type combo
 * @option 100
 * @option 50
 * @option 150
 * @option $gameVariables.value(ID)
 * @default 100
 *
 * @arg duration
 * @text Duration
 * @desc Duration in frames. 0 - Immediately. Calculated with Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0

 * @command StopAllVideo
 * @desc Stops all videos

 * @command PlaceVideoPlayerBeforePictures
 * @desc Place the video player in front of the images layer

 * @command PlaceVideoPlayerAfterPictures
 * @desc Place video player after images layer

 * @command ResetVideoLayer
 * @desc Reset layer (position, opacity, volume, etc.)
 *
 * @arg layer
 * @text Layer
 * @desc Layer. Calculated with Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command CheckVideoCodecSupport
 * @desc Check codec support
 *
 * @arg showMessage
 * @text Show message
 * @desc Show message about supported codecs
 * @type boolean
 * @default false

 * @command PreloadVideo
 * @desc Preloads the video
 *
 * @arg src
 * @text Video source
 * @desc Video source. Without "movies/" and file extension.



 * @param videoExtension
 * @text Video extension
 * @desc Video extension
 * @type combo
 * @option auto
 * @option .webm
 * @option .mp4
 * @default auto

 * @param Title screen
 * @default ---------------------------------

 * @param titleVideos
 * @text Videos before title screen
 * @parent Title screen
 * @desc Videos before title screen
 * @type struct<TitleVideo>
 * @default {"videos":"[]","okBehavior":"","cancelBehavior":"","playbackRate":"150"}

 * @param titleBackground
 * @text Background video
 * @parent Title screen
 * @desc Background video on title screen
 * @type struct<Video>
 * @default {"src":"","volume":"100","playbackRate":"100"}

 * @param creditsVideos
 * @text Credits videos
 * @parent Title screen
 * @desc Credits videos on title screen
 * @type struct<CreditsVideo>
 * @default {"commandName":"","videos":"[]","okBehavior":"","cancelBehavior":"","playbackRate":"150"}

 * @param Map
 * @default ---------------------------------

 * @param mapMaxLayers
 * @text Maximum layers on a map
 * @parent Map
 * @desc Maximum layers on a map
 * @type number
 * @min 1
 * @default 5

 * @param mapOkBehavior
 * @text "ok" behavior
 * @parent Map
 * @desc Behavior for "ok" (enter, mouse left button, etc.). Only works with looped videos.
 * @type select
 * @option None
 * @value
 * @option Skip
 * @value skip
 * @default

 * @param mapCancelBehavior
 * @text "cancel" behavior
 * @parent Map
 * @desc Behavior for "cancel" (escape, mouse right button, etc.). Only works with looped videos.
 * @type select
 * @option None
 * @value
 * @option Skip
 * @value skip
 * @default

 * @param Menu
 * @default ---------------------------------

 * @param menuBackground
 * @text Menu background
 * @parent Menu
 * @desc Video source of the menu background. Without "movies/" and file extension.

 * @param RPG Maker MV
 * @default ---------------------------------

 * @param useMasterVolume
 * @text Use master volume
 * @parent RPG Maker MV
 * @desc Use master volume for videos
 * @type boolean
 * @default false

*/

/*:ru
 * @plugindesc v.1.3.0 [MV|MZ] [LITE] Добавляет видео перед титульным экраном, титры, слои на карте и другое.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @orderAfter DKTools
 * @orderAfter DK_Game_Time
 * @help

 ### Информация о плагине ###
 Название: DK_Video_Player
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Контакты: https://dk-plugins.ru/contacts
 Версия: 1.3.0
 Релиз: 12.09.2024
 Первый релиз: 17.02.2021

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Совместимость с другими плагинами
 ###=========================================================================
 Чтобы совместимость работала правильно,
 плагины из следующего списка необходимо разместить ВЫШЕ:
 DKTools.js
 DK_Game_Time.js

 ###=========================================================================
 ## Форматы видео
 ###=========================================================================
 Для корректной работы плагина и обеспечения совместимости с различными
 браузерами и платформами рекомендуется использовать видеофайлы в следующих форматах:

 MP4: Формат MP4 с кодеком H.264 для видео и AAC для аудио является самым широко
 поддерживаемым форматом. Он обеспечивает хорошее качество видео и аудио,
 а также высокую степень совместимости с большинством браузеров и устройств.

 WebM: Формат WebM с кодеками VP8 или VP9 для видео и Opus или Vorbis для аудио
 также хорошо поддерживается современными браузерами и может использоваться
 как альтернатива MP4.

 Обратите внимание, что не все кодеки внутри этих форматов могут поддерживаться
 одинаково хорошо. Например, MP4 с кодеком H.265 (HEVC) может не воспроизводиться
 на всех устройствах.

 Рекомендуется проверять воспроизводимость видео перед его использованием
 в проекте, чтобы избежать проблем с совместимостью.

 ###=========================================================================
 ## Инструкции
 ###=========================================================================
 Прежде чем вызывать команду плагина PlayVideo, необходимо вызвать команду
 LoadVideo, чтобы загрузить видео на слой (предзагрузка в память)!

 # Важно! Разница между командами LoadVideo и PreloadVideo #
 LoadVideo - загружает видео на слой, и это видео доступно только на этой карте.
 При перемещении на другую карту, запуске битвы, выходе в меню и т.д. видео будет очищено из памяти!
 PreloadVideo - предзагружает видео в память до первого вызова LoadVideo с этим же названием,
 то есть оно будет храниться между любыми картами, битвами и другими переходами.
 Как только Вы вызовете LoadVideo с этим же названием, предзагруженное видео будет
 помещено на указанный слой и удалено из кэша!

 ## Использование видео в качестве паралакса карты ##
 В заметках карты пропишите <videoParallax: filename>
 filename - Название видеофайла без расширения
 Пример: <videoParallax: map_parallax_video>

 Для зацикливания параллакса используйте встроенные настройки зацикливания
 в параметрах карты.

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Загрузить видео на слой: LoadVideo LAYER SRC
 LAYER - Слой. Вычисляется с помощью Javascript.
 SRC - Источник видео. Без "movies/" и расширения файла.
 Пример: LoadVideo 1 dialog1
 Пример: LoadVideo $gameVariables.value(1) dialog1

 2. Воспроизвести видео (требуется предварительно загрузить на слой): PlayVideo LAYER LOOP WAIT
 LAYER - Слой. Вычисляется с помощью Javascript.
 LOOP - Зациклить видео (true, false)
 WAIT - Ждать окончания (true, false)
 Пример: PlayVideo 1 true false
 Пример: PlayVideo $gameVariables.value(1) false true

 3. Поставить видео на паузу: PauseVideo LAYER
 LAYER - Слой. Вычисляется с помощью Javascript.
 Пример: PauseVideo 1
 Пример: PauseVideo $gameVariables.value(1)

 4. Продолжить воспроизведение видео: ResumeVideo LAYER
 LAYER - Слой. Вычисляется с помощью Javascript.
 Пример: ResumeVideo 1
 Пример: ResumeVideo $gameVariables.value(1)

 5. Остановить видео: StopVideo LAYER
 LAYER - Слой. Вычисляется с помощью Javascript.
 Пример: StopVideo 1
 Пример: StopVideo $gameVariables.value(1)

 6. Заменить видео на слое*: ReplaceVideo LAYER SRC LOOP WAIT
 *заметка: Изменение происходит после загрузки нового видео и окончания предыдущего видео.
 LAYER - Слой. Вычисляется с помощью Javascript.
 SRC - Источник видео. Без "movies/" и расширения файла.
 LOOP - Зациклить видео (true, false)
 WAIT - Ждать окончания (true, false)
 Пример: ReplaceVideo 1 dialog1 true false
 Пример: ReplaceVideo $gameVariables.value(1) dialog1 true false

 7. Установить громкость видео: SetVideoVolume LAYER VOLUME
 LAYER - Слой. Вычисляется с помощью Javascript.
 VOLUME - Громкость. Вычисляется с помощью Javascript.
 Пример: SetVideoVolume 1 100
 Пример: SetVideoVolume $gameVariables.value(1) $gameVariables.value(2)

 8. Установить скорость видео: SetVideoSpeed LAYER SPEED
 LAYER - Слой. Вычисляется с помощью Javascript.
 SPEED - Скорость воспроизведения. Вычисляется с помощью Javascript.
 Пример: SetVideoSpeed 1 150
 Пример: SetVideoSpeed $gameVariables.value(1) $gameVariables.value(2)

 9. Установить режим смешивания видео: SetVideoBlendMode LAYER BLEND_MODE
 LAYER - Слой. Вычисляется с помощью Javascript.
 BLEND_MODE - Режим смешивания (NORMAL, ADD, MULTIPLY, SCREEN)
 Пример: SetVideoBlendMode 1 ADD
 Пример: SetVideoBlendMode $gameVariables.value(1) MULTIPLY

 10. Установить точку привязки видео: SetVideoPivot LAYER PIVOT
 LAYER - Слой. Вычисляется с помощью Javascript.
 PIVOT - Точка привязки (0 - Левый верхний угол, 0.5 - центр)
 Пример: SetVideoPivot 1 0.5
 Пример: SetVideoPivot $gameVariables.value(1) $gameVariables.value(2)

 11. Переместить видео: MoveVideo LAYER X Y DURATION
 LAYER - Слой. Вычисляется с помощью Javascript.
 X - X. Вычисляется с помощью Javascript.
 Y - Y. Вычисляется с помощью Javascript.
 DURATION - Длительность в кадрах. 0 - Немедленно. Вычисляется с помощью Javascript.
 Пример: MoveVideo 1 100 100 0
 Пример: MoveVideo $gameVariables.value(1) $gameVariables.value(2) $gameVariables.value(3) $gameVariables.value(4)

 12. Изменить прозрачность видео: ChangeVideoOpacity LAYER OPACITY DURATION
 LAYER - Слой. Вычисляется с помощью Javascript.
 OPACITY - Прозрачность. Вычисляется с помощью Javascript.
 DURATION - Длительность в кадрах. 0 - Немедленно. Вычисляется с помощью Javascript.
 Пример: ChangeVideoOpacity 1 128 60
 Пример: ChangeVideoOpacity $gameVariables.value(1) $gameVariables.value(2) $gameVariables.value(3)

 13. Изменить масштабирование видео: ChangeVideoScale LAYER X Y DURATION
 LAYER - Слой. Вычисляется с помощью Javascript.
 X - Масштабирование по X. Вычисляется с помощью Javascript.
 Y - Масштабирование по Y. Вычисляется с помощью Javascript.
 DURATION - Длительность в кадрах. 0 - Немедленно. Вычисляется с помощью Javascript.
 Пример: ChangeVideoScale 1 50 50 60
 Пример: ChangeVideoScale $gameVariables.value(1) $gameVariables.value(2) $gameVariables.value(3) $gameVariables.value(4)

 14. Остановить все видео: StopAllVideo

 15. Разместить видео плеер перед слоем изображений: PlaceVideoPlayerBeforePictures

 16. Разместить видео плеер после слоя изображений: PlaceVideoPlayerAfterPictures

 17. Сбросить слой (позиция, прозрачность, громкость и т.д.): ResetVideoLayer LAYER
 LAYER - Слой. Вычисляется с помощью Javascript.
 Пример: ResetVideoLayer 1
 Пример: ResetVideoLayer $gameVariables.value(1)

 18. Проверить поддержку кодеков: CheckVideoCodecSupport showMessage
 showMessage - Показать сообщение о поддерживаемых кодеках (true, false)
 Пример: CheckVideoCodecSupport true
 Пример: CheckVideoCodecSupport false

 19. Предзагрузить видео: PreloadVideo SRC
 SRC - Источник видео. Без "movies/" и расширения файла.
 Пример: PreloadVideo dialog1


 ###=========================================================================
 ## Получите больше возможностей
 ###=========================================================================
 Дополнительные возможности в PRO версии:
 - Возможность ждать загрузки всех видео перед воспроизведением.
 - Настройки для воспроизведения видео во время боя.
 - Воспроизведение GIF.

 Больше подробностей: https://dk-plugins.ru/video-player/

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Время (https://dk-plugins.ru/game-time/)
 Система времени.

 2. Глобальные Данные (https://dk-plugins.ru/globals/)
 Позволяет указать переменные и переключатели, которые будут "глобальными" для всех сохранений игрока.
 Изменения сохраняются в отдельный файл и применяются при старте новой игры или загрузке любого сохранения.

 3. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 4. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 5. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 ###=========================================================================
 ## Лицензия и правила использования плагина
 ###=========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Стать подписчиком на boosty: https://boosty.to/dkplugins
 Стать подписчиком на patreon: https://patreon.com/dkplugins
 Поддержать: https://dk-plugins.ru/donate



 * @command LoadVideo
 * @text Load Video
 * @desc Загрузить видео на слой
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg src
 * @text Источник видео
 * @desc Источник видео. Без "movies/" и расширения файла.


 * @command PlayVideo
 * @text Play Video/GIF
 * @desc Воспроизвести видео/GIF (требуется предварительно загрузить на слой)
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg loop
 * @text Зациклить
 * @desc Зациклить видео ?
 * @type boolean
 * @default false
 *
 * @arg wait
 * @text Ждать
 * @desc Ждать окончания ?
 * @type boolean
 * @default false

 * @command PauseVideo
 * @text Pause video/GIF
 * @desc Поставить видео/GIF на паузу
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command ResumeVideo
 * @text Resume video/GIF
 * @desc Продолжить воспроизведение видео/GIF
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command StopVideo
 * @text Stop video/GIF
 * @desc Остановить видео/GIF
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command ReplaceVideo
 * @text Replace Video
 * @desc Заменить видео/GIF на видео. Видео меняется в конце предыдущего.
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg src
 * @text Источник видео
 * @desc Источник видео. Без "movies/" и расширения файла.
 *
 * @arg loop
 * @text Зациклить
 * @desc Зациклить видео ?
 * @type boolean
 * @default false
 *
 * @arg wait
 * @text Ждать
 * @desc Ждать окончания ?
 * @type boolean
 * @default false

 * @command SetVideoVolume
 * @desc Установить громкость видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg volume
 * @text Громкость
 * @desc Громкость. По умолчанию: 100
 * @default 100

 * @command SetVideoSpeed
 * @desc Установить скорость видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg speed
 * @text Скорость
 * @desc Скорость. По умолчанию: 100
 * @default 100

 * @command SetVideoBlendMode
 * @desc Установить режим смешивания видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg blendMode
 * @text Режим смешивания
 * @desc Режим смешивания
 * @type select
 * @option normal
 * @value NORMAL
 * @option add
 * @value ADD
 * @option multiply
 * @value MULTIPLY
 * @option screen
 * @value SCREEN
 * @default NORMAL

 * @command SetVideoPivot
 * @desc Установить точку привязки видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg pivot
 * @text Точка привязки
 * @desc Точка привязки
 * @type select
 * @option Верхний левый угол
 * @value 0
 * @option Центр
 * @value 0.5
 * @default 0

 * @command MoveVideo
 * @text Move Video
 * @desc Переместить видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg x
 * @text X
 * @desc X. Вычисляется с помощью Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0
 *
 * @arg y
 * @text Y
 * @desc Y. Вычисляется с помощью Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0
 *
 * @arg duration
 * @text Длительность
 * @desc Длительность в кадрах. 0 - Немедленно. Вычисляется с помощью Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0

 * @command ChangeVideoOpacity
 * @desc Изменить прозрачность видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg opacity
 * @text Прозрачность
 * @desc Прозрачность. Вычисляется с помощью Javascript.
 * @type combo
 * @option 255
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 255
 *
 * @arg duration
 * @text Duration
 * @desc Длительность в кадрах. 0 - Немедленно. Вычисляется с помощью Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0

 * @command ChangeVideoScale
 * @desc Изменить масштабирование видео
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1
 *
 * @arg x
 * @text X
 * @desc X. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1.0
 * @option 0.5
 * @option 1.5
 * @option $gameVariables.value(ID)
 * @default 1.0
 *
 * @arg y
 * @text Y
 * @desc Y. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1.0
 * @option 0.5
 * @option 1.5
 * @option $gameVariables.value(ID)
 * @default 1.0
 *
 * @arg duration
 * @text Длительность
 * @desc Длительность в кадрах. 0 - Немедленно. Вычисляется с помощью Javascript.
 * @type combo
 * @option 0
 * @option $gameVariables.value(ID)
 * @default 0

 * @command StopAllVideo
 * @desc Остановить все видео

 * @command PlaceVideoPlayerBeforePictures
 * @desc Разместить видео плеер перед слоем изображений

 * @command PlaceVideoPlayerAfterPictures
 * @desc Разместить видео плеер после слоя изображений

 * @command ResetVideoLayer
 * @desc Сбросить слой (позиция, прозрачность, громкость и т.д.)
 *
 * @arg layer
 * @text Слой
 * @desc Слой. Вычисляется с помощью Javascript.
 * @type combo
 * @option 1
 * @option $gameVariables.value(ID)
 * @default 1

 * @command CheckVideoCodecSupport
 * @desc Проверить поддержку кодеков
 *
 * @arg showMessage
 * @text Показать сообщение
 * @desc Показать сообщение о поддерживаемых кодеках
 * @type boolean
 * @default false

 * @command PreloadVideo
 * @desc Предзагрузить видео
 *
 * @arg src
 * @text Источник видео
 * @desc Источник видео. Без "movies/" и расширения файла.



 * @param videoExtension
 * @text Расширение видео
 * @desc Расширение видео
 * @type combo
 * @option auto
 * @option .webm
 * @option .mp4
 * @default auto

 * @param Title screen
 * @text Титульный экран
 * @default ---------------------------------

 * @param titleVideos
 * @text Видео перед титульным экраном
 * @parent Title screen
 * @desc Видео перед титульным экраном
 * @type struct<TitleVideo>
 * @default {"videos":"[]","okBehavior":"","cancelBehavior":"","playbackRate":"150"}

 * @param titleBackground
 * @text Задний фон титульного экрана
 * @parent Title screen
 * @desc Задний фон титульного экрана
 * @type struct<Video>
 * @default {"src":"","volume":"100","playbackRate":"100"}

 * @param creditsVideos
 * @text Титры на титульном экране
 * @parent Title screen
 * @desc Титры на титульном экране
 * @type struct<CreditsVideo>
 * @default {"commandName":"","videos":"[]","okBehavior":"","cancelBehavior":"","playbackRate":"150"}

 * @param Map
 * @text Карта
 * @default ---------------------------------

 * @param mapMaxLayers
 * @text Максимальное количество слоев на карте
 * @parent Map
 * @desc Максимальное количество слоев на карте
 * @type number
 * @min 1
 * @default 5

 * @param mapOkBehavior
 * @text Поведение нажатия "ok"
 * @parent Map
 * @desc Поведение для "ok" (enter, левая кнопка мыши и т.д.). Работает только с зацикленными видео.
 * @type select
 * @option Не указано
 * @value
 * @option Пропустить
 * @value skip
 * @default

 * @param mapCancelBehavior
 * @text Поведение нажатия "cancel"
 * @parent Map
 * @desc Поведение для "cancel" (escape, правая кнопка мыши и т.д.). Работает только с зацикленными видео.
 * @type select
 * @option Не указано
 * @value
 * @option Пропустить
 * @value skip
 * @default

 * @param Menu
 * @text Меню
 * @default ---------------------------------

 * @param menuBackground
 * @text Задний фон меню
 * @parent Menu
 * @desc Источник видео заднего фона меню. Без "movies/" и расширения файла.

 * @param RPG Maker MV
 * @default ---------------------------------

 * @param useMasterVolume
 * @text Использовать общую громкость
 * @parent RPG Maker MV
 * @desc Использовать общую громкость для всех видео
 * @type boolean
 * @default false

*/

/*~struct~TitleVideo:

 * @param videos
 * @text Videos
 * @desc Videos
 * @type struct<Video>[]
 * @default []

 * @param okBehavior
 * @text "ok" behavior
 * @desc Behavior for "ok" (enter, mouse left button, etc.)
 * @type select
 * @option None
 * @value
 * @option Skip
 * @value skip
 * @option Fast forward
 * @value fastForward
 * @default

 * @param cancelBehavior
 * @text "cancel" behavior
 * @desc Behavior for "cancel" (escape, mouse right button, etc.)
 * @type select
 * @option None
 * @value
 * @option Skip
 * @value skip
 * @option Fast forward
 * @value fastForward
 * @default

 * @param playbackRate
 * @text Playback rate
 * @desc Playback rate. ONLY for behavior="Fast forward".
 * @type number
 * @min 1
 * @default 150

*/

/*~struct~TitleVideo:ru

 * @param videos
 * @text Видео
 * @desc Видео
 * @type struct<Video>[]
 * @default []

 * @param okBehavior
 * @text "ok" поведение
 * @desc Поведение для "ok" (enter, левая кнопка мыши и т.д.)
 * @type select
 * @option Нет
 * @value
 * @option Пропустить
 * @value skip
 * @option Перемотка вперед
 * @value fastForward
 * @default

 * @param cancelBehavior
 * @text "cancel" поведение
 * @desc Поведение для "cancel" (escape, правая кнопка мыши и т.д.)
 * @type select
 * @option Нет
 * @value
 * @option Пропустить
 * @value skip
 * @option Перемотка вперед
 * @value fastForward
 * @default

 * @param playbackRate
 * @text Скорость воспроизведения
 * @desc Скорость воспроизведения. ТОЛЬКо для поведения="Перемотка вперед".
 * @type number
 * @min 1
 * @default 150

*/

/*~struct~CreditsVideo:

 * @param commandName
 * @text Command name
 * @desc Command name. Leave blank to not use.

 * @param videos
 * @text Videos
 * @desc Videos
 * @type struct<Video>[]
 * @default []

 * @param okBehavior
 * @text "ok" behavior
 * @desc Behavior for "ok" (enter, mouse left button, etc.)
 * @type select
 * @option None
 * @value
 * @option Skip
 * @value skip
 * @option Fast forward
 * @value fastForward
 * @default

 * @param cancelBehavior
 * @text "cancel" behavior
 * @desc Behavior for "cancel" (escape, mouse right button, etc.)
 * @type select
 * @option None
 * @value
 * @option Skip
 * @value skip
 * @option Fast forward
 * @value fastForward
 * @default

 * @param playbackRate
 * @text Playback rate
 * @desc Playback rate. ONLY for behavior="Fast forward".
 * @type number
 * @min 1
 * @default 150

*/

/*~struct~CreditsVideo:ru

 * @param commandName
 * @text Название команды
 * @desc Название команды. Оставьте пустым, чтобы не использовать.

 * @param videos
 * @text Видео
 * @desc Видео
 * @type struct<Video>[]
 * @default []

 * @param okBehavior
 * @text "ok" поведение
 * @desc Поведение для "ok" (enter, левая кнопка мыши и т.д.)
 * @type select
 * @option Нет
 * @value
 * @option Пропустить
 * @value skip
 * @option Перемотка вперед
 * @value fastForward
 * @default

 * @param cancelBehavior
 * @text "cancel" поведение
 * @desc Поведение для "cancel" (escape, правая кнопка мыши и т.д.)
 * @type select
 * @option Нет
 * @value
 * @option Пропустить
 * @value skip
 * @option Перемотка вперед
 * @value fastForward
 * @default

 * @param playbackRate
 * @text Скорость воспроизведения
 * @desc Скорость воспроизведения. ТОЛЬКО для поведения="Перемотка вперед".
 * @type number
 * @min 1
 * @default 150

*/

/*~struct~Video:

 * @param src
 * @text Source
 * @desc Video source. Without "movies/" and file extension.

 * @param volume
 * @text Volume
 * @desc Video volume in percentage. 0 - muted. Default: 100.
 * @type number
 * @min 0
 * @default 100

 * @param playbackRate
 * @text Playback rate
 * @desc Playback rate in percentage. Default: 100
 * @type number
 * @number
 * @min 1
 * @default 100

*/

/*~struct~Video:ru

 * @param src
 * @text Источник
 * @desc Источник видео. Без "movies/" и расширения файла.

 * @param volume
 * @text Громкость
 * @desc Громкость видео в процентах. 0 - беззвучно. По умолчанию: 100
 * @type number
 * @min 0
 * @default 100

 * @param playbackRate
 * @text Скорость воспроизведения
 * @desc Скорость воспроизведения в процентах. По умолчанию: 100
 * @type number
 * @number
 * @min 1
 * @default 100

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Video_Player'] = '1.3.0';

//===========================================================================
// initialize parameters
//===========================================================================

const VideoPlayerParams = (function() {

    function parse(string) {
        try {
            return JSON.parse(string, function(key, value) {
                if (typeof string === 'number' || typeof string === 'boolean') {
                    return string;
                }

                try {
                    if (Array.isArray(value)) {
                        return value.map(val => parse(val));
                    }

                    return parse(value);
                } catch (e) {
                    return value;
                }
            });
        } catch(e) {
            return string;
        }
    }

    const parameters = PluginManager.parameters('DK_Video_Player');

    return Object.entries(parameters).reduce((acc, [key, value]) => {
        acc[key] = parse(value);

        return acc;
    }, {});

})();

//===========================================================================
// Game_Interpreter
//===========================================================================

const VideoPlayer_Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    VideoPlayer_Game_Interpreter_pluginCommand.apply(this, arguments);

    switch (command) {
        case 'LoadVideo': {
            VideoManager.loadVideo(eval(args[0]), args[1]);
            break;
        }

        case 'SetVideoVolume': {
            VideoManager.setVideoVolume(eval(args[0]), eval(args[1]));
            break;
        }

        case 'SetVideoSpeed': {
            VideoManager.setVideoSpeed(eval(args[0]), eval(args[1]));
            break;
        }

        case 'SetVideoBlendMode': {
            VideoManager.setVideoBlendMode(eval(args[0]), PIXI.BLEND_MODES[args[1].toUpperCase()]);
            break;
        }

        case 'SetVideoPivot': {
            VideoManager.setVideoPivot(eval(args[0]), eval(args[1]));
            break;
        }

        case 'MoveVideo': {
            VideoManager.moveVideo(
                eval(args[0]),
                new Point(eval(args[1]), eval(args[2])),
                eval(args[3]));
            break;
        }

        case 'ChangeVideoOpacity': {
            VideoManager.changeVideoOpacity(eval(args[0]), eval(args[1]), eval(args[2]));
            break;
        }

        case 'ChangeVideoScale': {
            VideoManager.changeVideoScale(
                eval(args[0]),
                new Point(eval(args[1]) / 100, eval(args[2]) / 100),
                eval(args[3]))
            break;
        }

        case 'PlayVideo': {
            const layer = eval(args[0]);
            const options = {
                loop: args.length > 1 && (args[1].toLowerCase() === 'loop' || JSON.parse(args[1].toLowerCase()))
            };

            VideoManager.playVideo(layer, options);

            if (args.length > 2 && (args[2].toLowerCase() === 'wait' || JSON.parse(args[2].toLowerCase()))) {
                this.setWaitMode('videoPlayer-' + layer);
            }

            break;
        }

        case 'PauseVideo': {
            VideoManager.pauseVideo(eval(args[0]));
            break;
        }

        case 'ResumeVideo': {
            VideoManager.resumeVideo(eval(args[0]));
            break;
        }

        case 'StopVideo': {
            VideoManager.stopVideo(eval(args[0]));
            break;
        }

        case 'StopAllVideo': {
            VideoManager.stopAllVideo();
            break;
        }

        case 'ReplaceVideo': {
            const layer = eval(args[0]);
            const src = args[1];
            const options = {
                loop: args.length > 2 && (args[2].toLowerCase() === 'loop' || JSON.parse(args[2].toLowerCase()))
            };

            VideoManager.replaceVideo(layer, src, options);

            if (args.length > 3 && (args[3].toLowerCase() === 'wait' || JSON.parse(args[3].toLowerCase()))) {
                this.setWaitMode('videoPlayer-' + layer);
            }

            break;
        }

        case 'PlaceVideoPlayerBeforePictures': {
            const scene = SceneManager._scene;

            if (scene instanceof Scene_Map || scene instanceof Scene_Battle) {
                scene._spriteset && scene._spriteset.placeVideoPlayerBeforePictures();
            }
            break;
        }

        case 'PlaceVideoPlayerAfterPictures': {
            const scene = SceneManager._scene;

            if (scene instanceof Scene_Map || scene instanceof Scene_Battle) {
                scene._spriteset && scene._spriteset.placeVideoPlayerAfterPictures();
            }
            break;
        }

        case 'ResetVideoLayer': {
            VideoManager.resetLayer(eval(args[0]));
            break;
        }

        case 'CheckVideoCodecSupport':
            VideoManager.checkVideoCodecSupport(eval(args[0]));
            break;

        case 'PreloadVideo':
            VideoManager.preloadVideo(args[0]);
            break;
    }
};

if (Utils.RPGMAKER_NAME === 'MZ') {

    PluginManager.registerCommand('DK_Video_Player', 'LoadVideo', (args) => {
        VideoManager.loadVideo(eval(args.layer), args.src);
    });

    PluginManager.registerCommand('DK_Video_Player', 'SetVideoVolume', (args) => {
        VideoManager.setVideoVolume(eval(args.layer), eval(args.volume));
    });

    PluginManager.registerCommand('DK_Video_Player', 'SetVideoSpeed', (args) => {
        VideoManager.setVideoSpeed(eval(args.layer), eval(args.speed));
    });

    PluginManager.registerCommand('DK_Video_Player', 'SetVideoBlendMode', (args) => {
        VideoManager.setVideoBlendMode(eval(args.layer), PIXI.BLEND_MODES[args.blendMode]);
    });

    PluginManager.registerCommand('DK_Video_Player', 'SetVideoPivot', (args) => {
        VideoManager.setVideoPivot(eval(args.layer), eval(args.pivot));
    });

    PluginManager.registerCommand('DK_Video_Player', 'MoveVideo', (args) => {
        VideoManager.moveVideo(
            eval(args.layer),
            new Point(eval(args.x), eval(args.y)),
            eval(args.duration));
    });

    PluginManager.registerCommand('DK_Video_Player', 'ChangeVideoOpacity', (args) => {
        VideoManager.changeVideoOpacity(
            eval(args.layer),
            eval(args.opacity),
            eval(args.duration));
    });

    PluginManager.registerCommand('DK_Video_Player', 'ChangeVideoScale', (args) => {
        VideoManager.changeVideoScale(
            eval(args.layer),
            new Point(eval(args.x) / 100, eval(args.y) / 100),
            eval(args.duration));
    });

    PluginManager.registerCommand('DK_Video_Player', 'PlayVideo', function(args) {
        const layer = eval(args.layer);
        const options = {
            loop: JSON.parse(args.loop)
        };

        VideoManager.playVideo(layer, options);

        if (JSON.parse(args.wait)) {
            this.setWaitMode('videoPlayer-' + layer);
        }
    });

    PluginManager.registerCommand('DK_Video_Player', 'PauseVideo', (args) => {
        VideoManager.pauseVideo(eval(args.layer));
    });

    PluginManager.registerCommand('DK_Video_Player', 'ResumeVideo', (args) => {
        VideoManager.resumeVideo(eval(args.layer));
    });

    PluginManager.registerCommand('DK_Video_Player', 'StopVideo', (args) => {
        VideoManager.stopVideo(eval(args.layer));
    });

    PluginManager.registerCommand('DK_Video_Player', 'StopAllVideo', () => {
        VideoManager.stopAllVideo();
    });

    PluginManager.registerCommand('DK_Video_Player', 'ReplaceVideo', function(args) {
        const layer = eval(args.layer);
        const src = args.src;
        const options = {
            loop: JSON.parse(args.loop)
        };

        VideoManager.replaceVideo(layer, src, options);

        if (JSON.parse(args.wait)) {
            this.setWaitMode('videoPlayer-' + layer);
        }
    });

    PluginManager.registerCommand('DK_Video_Player', 'PlaceVideoPlayerBeforePictures', () => {
        const scene = SceneManager._scene;

        if (scene instanceof Scene_Map || scene instanceof Scene_Battle) {
            scene._spriteset && scene._spriteset.placeVideoPlayerBeforePictures();
        }
    });

    PluginManager.registerCommand('DK_Video_Player', 'PlaceVideoPlayerAfterPictures', () => {
        const scene = SceneManager._scene;

        if (scene instanceof Scene_Map || scene instanceof Scene_Battle) {
            scene._spriteset && scene._spriteset.placeVideoPlayerAfterPictures();
        }
    });

    PluginManager.registerCommand('DK_Video_Player', 'ResetVideoLayer', (args) => {
        VideoManager.resetLayer(eval(args.layer));
    });

    PluginManager.registerCommand('DK_Video_Player', 'CheckVideoCodecSupport', (args) => {
        VideoManager.checkVideoCodecSupport(eval(args.showMessage));
    });

    PluginManager.registerCommand('DK_Video_Player', 'PreloadVideo', (args) => {
        VideoManager.preloadVideo(args.src);
    });

}

const VideoPlayer_Game_Interpreter_updateWaitMode =
    Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
    if (this._waitMode.startsWith('videoPlayer')) {
        const layer = Number(this._waitMode.split('-').pop());
        const waiting = VideoManager.isPlaying(layer);

        if (!waiting) {
            this._waitMode = '';
        }

        return waiting;
    }

    return VideoPlayer_Game_Interpreter_updateWaitMode.apply(this, arguments);
};

//===========================================================================
// Game_Map
//===========================================================================

Game_Map.prototype.videoParallaxName = function() {
    if (!$dataMap.meta || !$dataMap.meta.videoParallax) {
        return null;
    }

    return $dataMap.meta.videoParallax.trim();
};

Game_Map.prototype.isVideoParallax = function() {
    return !!this.videoParallaxName();
};

//===========================================================================
// VideoManager
//===========================================================================

class VideoManager {

    static checkVideoCodecSupport(showMessage) {
        const video = document.createElement('video');
        const formats = [
            'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
            'video/webm; codecs="vp8, vorbis"',
            'video/webm; codecs="vp9, opus"'
        ];
        const messages = [];
        let allFormatsSupported = true;

        if (video.canPlayType) {
            formats.forEach((format) => {
                if (!video.canPlayType(format).replace(/no/, '')) {
                    const message = `The current platform does not support the ${format} video format.`;

                    console.error(message);

                    allFormatsSupported = false;
                    messages.push(message);
                }
            });
        } else {
            const message = 'HTML5 video is not supported.';

            console.error(message);

            allFormatsSupported = false;
            messages.push(message);
        }

        if (allFormatsSupported) {
            const message = 'All video formats are supported.';

            console.info(message);

            messages.push(message);
        }

        if (showMessage && messages.length > 0) {
            $gameMessage.add(messages.join('\n'));
        }
    }

    /**
     * @static
     * @param {String} src
     * @return {String}
     */
    static getFullPath(src) {
        if (Imported['DKTools_Localization']) {
            const parts = (this.folder + '/' + src).split('/');
            const filename = parts.pop();
            let extension = this.videoExt();

            if (filename.endsWith('.webm') || filename.endsWith('.mp4') || filename.endsWith('.gif')) {
                extension = '';
            }

            const folder = DKTools.Localization.getVideoFolder(parts.join('/'), filename + extension);

            return folder + filename + extension;
        }

        if (src.endsWith('.webm') || src.endsWith('.mp4') || src.endsWith('.gif')) {
            return this.folder + src;
        }

        return this.folder + src + this.videoExt();
    }

    /**
     * @static
     * @param {String} src
     */
    static preloadVideo(src) {
        const fullPath = this.getFullPath(src);
        const elementIndex = this._loadingQueue.findIndex(e => e.src === fullPath && e.isReady());

        if (elementIndex === -1) {
            const videoElement = fullPath.endsWith('.gif') ?
                GifElement.load(fullPath) : VideoElement.load(fullPath);

            this._loadingQueue.push(videoElement);
        }
    }

    /**
     * @static
     * @param {String} src
     * @return {VideoElement}
     */
    static load(src) {
        const fullPath = this.getFullPath(src);
        const elementIndex = this._loadingQueue.findIndex(e => e.src === fullPath && e.isReady());
        let videoElement;

        if (elementIndex === -1) {
            videoElement = VideoElement.load(fullPath);

            this._loadingQueue.push(videoElement);
        } else {
            videoElement = this._loadingQueue[elementIndex];
            this._loadingQueue.splice(elementIndex, 1);
        }

        return videoElement;
    }

    /**
     * @static
     * @param {String} src
     * @return {Promise<VideoElement>}
     */
    static loadAsync(src) {
        return new Promise((resolve) => {
            const videoElement = this.load(src);

            videoElement.addLoadListener(() => {
                resolve(videoElement);
            });
        });
    }

    /**
     * @static
     * @return {String}
     */
    static videoExt() {
        return VideoPlayerParams.videoExtension !== 'auto' ?
            VideoPlayerParams.videoExtension : Game_Interpreter.prototype.videoFileExt();
    }

    /**
     * @static
     * @return {Boolean}
     */
    static isReady() {
        return this._loadingQueue.length === 0 || this._loadingQueue.every(el => el.isReady());
    }

    /**
     * @static
     * @param {Number} [layer]
     * @return {Boolean}
     */
    static isPlaying(layer) {
        return Boolean(this._videoPlayer && this._videoPlayer.isPlaying(layer))
            || this.isReplacing(layer);
    }

    /**
     * @static
     * @param {Number} [layer]
     * @return {Boolean}
     */
    static isReplacing(layer) {
        return Boolean(this._videoPlayer && this._videoPlayer.isReplacing(layer));
    }

    /**
     * @static
     * @return {Boolean}
     */
    static isBusy() {
        return !this.isReady() || this.isPlaying();
    }

    /**
     * @static
     * @param {Sprite_VideoPlayer} videoPlayer
     */
    static setVideoPlayer(videoPlayer) {
        this._videoPlayer = videoPlayer;
    }

    /**
     * @static
     * @param {Number} layer
     * @param {String} src
     */
    static loadVideo(layer, src) {
        this._videoPlayer && this._videoPlayer.load(layer, src);
    }

    /**
     * @static
     * @param {Number} layer
     * @return {Sprite_Video | null}
     */
    static getVideo(layer) {
        return (this._videoPlayer ?
            this._videoPlayer.getVideo(layer) : null);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Number} volume
     */
    static setVideoVolume(layer, volume) {
        this._videoPlayer && this._videoPlayer.setVolume(layer, volume);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Number} blendMode
     */
    static setVideoBlendMode(layer, blendMode) {
        this._videoPlayer && this._videoPlayer.setBlendMode(layer, blendMode);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Number} speed
     */
    static setVideoSpeed(layer, speed) {
        this._videoPlayer && this._videoPlayer.setSpeed(layer, speed);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Number} pivot
     */
    static setVideoPivot(layer, pivot) {
        this._videoPlayer && this._videoPlayer.setPivot(layer, pivot);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Point} pos
     * @param {Number} [duration=0]
     */
    static moveVideo(layer, pos, duration = 0) {
        this._videoPlayer && this._videoPlayer.changePos(layer, pos, duration);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Number} opacity
     * @param {Number} [duration=0]
     */
    static changeVideoOpacity(layer, opacity, duration = 0) {
        this._videoPlayer && this._videoPlayer.changeOpacity(layer, opacity, duration);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Point} scale
     * @param {Number} [duration=0]
     */
    static changeVideoScale(layer, scale, duration = 0) {
        this._videoPlayer && this._videoPlayer.changeScale(layer, scale, duration);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {Object} [options={}]
     */
    static playVideo(layer, options = {}) {
        this._videoPlayer && this._videoPlayer.play(layer, options);
    }

    /**
     * @static
     * @param {Number} layer
     */
    static pauseVideo(layer) {
        this._videoPlayer && this._videoPlayer.pause(layer);
    }

    /**
     * @static
     * @param {Number} layer
     */
    static resumeVideo(layer) {
        this._videoPlayer && this._videoPlayer.resume(layer);
    }

    /**
     * @static
     * @param {Number} layer
     * @param {String} src
     * @param {Object} [options={}]
     */
    static replaceVideo(layer, src, options = {}) {
        this._videoPlayer && this._videoPlayer.replace(layer, src, options);
    }

    /**
     * @static
     * @param {Number} layer
     */
    static resetLayer(layer) {
        this._videoPlayer && this._videoPlayer.resetLayer(layer);
    }

    /**
     * @static
     * @param {Number} layer
     */
    static stopVideo(layer) {
        this._videoPlayer && this._videoPlayer.stop(layer);
    }

    /**
     * @static
     */
    static stopAllVideo() {
        this._videoPlayer && this._videoPlayer.stopAll();
    }

    /**
     * @static
     */
    static update() {
        this._videoPlayer && this._videoPlayer.updateBehavior();
    }

    // static properties

    /**
     * @static
     * @return {String}
     */
    static get folder() {
        return 'movies/';
    }

}

VideoManager._loadingQueue = [];

//===========================================================================
// VideoElement
//===========================================================================

class VideoElement {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    /**
     * @param {String} src
     * @param {HTMLVideoElement} element
     */
    initialize(src, element) {
        this._src = src;
        this._loadListeners = [];
        this._endListeners = [];
        this._video = element;
        this._video.onloadeddata = this._onLoad.bind(this);
        this._video.onended = this._onEnd.bind(this);
        this._video.onerror = this._onError.bind(this);
    }

    // methods

    addLoadListener(listener) {
        if (this.isReady()) {
            listener(this);
        } else {
            this._loadListeners.push(listener);
        }
    }

    addEndListener(listener) {
        this._endListeners.push(listener);
    }

    isReady() {
        return !!this._isReady;
    }

    destroy() {
        this._video.src = '';
    }

    play(currentTime = 0) {
        this._video.currentTime = currentTime;
        this._video.play();
    }

    pause() {
        this._video.pause();
    }

    // private methods

    _onLoad() {
        this._isReady = true;

        while (this._loadListeners.length > 0) {
            this._loadListeners.shift()(this);
        }
    }

    _onEnd() {
        while (this._endListeners.length > 0) {
            this._endListeners.shift()(this);
        }
    }

    _onError(e) {
        if (e.target && e.target.error.message.includes('Empty src attribute')) {
            return;
        }

        const error = 'Failed to load video or this video format is not supported on your platform. Probably you need to convert it to another format. Read the documentation for more information.';

        console.error(error);

        throw new Error(error);
    }

    // properties

    get src() {
        return this._src;
    }

    get video() {
        return this._video;
    }

    get width() {
        return this._video.videoWidth;
    }

    get height() {
        return this._video.videoHeight;
    }

    get currentTime() {
        return this._video.currentTime;
    }

    get duration() {
        return this._video.duration;
    }

    // static methods

    static _createVideo(src) {
        const video = document.createElement('video');

        video.src = src;
        video.preload = 'auto';
        video.load();

        return video;
    }

    static load(src) {
        return new VideoElement(src, this._createVideo(src));
    }

}

//===========================================================================
// Sprite_Video
//===========================================================================

class Sprite_Video extends Sprite {

    /**
     * @param {VideoElement} videoElement
     * @param {Object} [options={}]
     */
    initialize(videoElement, options = {}) {
        super.initialize();

        this._options = options;
        this._loop = false;
        this._pendingPlaying = false;
        this._isPlaying = false;
        this._endListeners = [];

        this.setVideoElement(videoElement);
    }

    /**
     * @param {Function} listener
     */
    addEndListener(listener) {
        if (this.isEnded() || !this._videoElement) {
            listener(this);
        } else {
            this._endListeners.push(listener);
        }
    }

    applyOptions() {
        if (this._options.loop) {
            this.loop = true;
        }

        if (this._options.muted) {
            this.muted = true;
        }

        if (Number.isFinite(this._options.volume)) {
            this.volume = this._options.volume;
        }

        if (Number.isFinite(this._options.playbackRate)) {
            this.defaultPlaybackRate = this._options.playbackRate;
            this.playbackRate = this._options.playbackRate;
        }

        if (Number.isFinite(this._options.defaultPlaybackRate)) {
            this.defaultPlaybackRate = this._options.defaultPlaybackRate;
        }
    }

    clearEndListeners() {
        this._endListeners = [];
    }

    destroy() {
        this.destroyVideo();
        PIXI.Sprite.prototype.destroy.call(this,
            { children: true, texture: true, baseTexture: true });
    }

    destroyVideo() {
        if (this._videoElement) {
            this._videoElement.destroy();
        }
    }

    endVideo() {
        if (this._videoElement) {
            this.currentTime = this.duration;
            this.pause();
        }
    }

    isEnded() {
        if (!this._videoElement) {
            return false;
        }

        return this.currentTime >= this.duration && this.isReady();
    }

    isPaused() {
        if (!this._videoElement) {
            return false;
        }

        return this.video.paused;
    }

    isPlaying() {
        return this._isPlaying || this._pendingPlaying;
    }

    isReady() {
        return this._videoElement.isReady();
    }

    /**
     * @return {Promise}
     */
    onEnd() {
        return new Promise((resolve) => {
            this.addEndListener(() => {
                resolve(this);
            });
        });
    }

    /**
     * @param {VideoElement} videoElement
     */
    setVideoElement(videoElement) {
        if (videoElement) {
            this._videoElement = videoElement;
            this._videoElement.addLoadListener(this._onLoad.bind(this));
        } else if (this._videoElement) {
            this.stop();
            this.destroy();
            this._videoElement = null;
        } else {
            this._videoElement = null;
        }
    }

    /**
     * @param {Number} [currentTime=0]
     * @return {Promise}
     */
    play(currentTime = 0) {
        if (!this._videoElement) {
            return Promise.reject();
        }

        this._pendingPlaying = true;

        if (Utils.RPGMAKER_NAME === 'MV' && VideoPlayerParams.useMasterVolume) {
            this.volume = AudioManager.masterVolume * 100;
        }

        return new Promise((resolve) => {
            this._videoElement.addLoadListener(() => {
                this._videoElement.play(currentTime);
                this._pendingPlaying = false;
                this._isPlaying = true;
                resolve(this);
            });
        });
    }

    resume() {
        return this.play(this.currentTime);
    }

    pause() {
        if (this._videoElement) {
            this._videoElement.pause();
        }

        this._pendingPlaying = false;
        this._isPlaying = false;
    }

    stop() {
        if (this._videoElement) {
            this.pause();
            this.currentTime = 0;
        }

        this._pendingPlaying = false;
        this._isPlaying = false;
    }

    updateEnd() {
        while (this._endListeners.length > 0) {
            this._endListeners.shift()(this);
        }
    }

    update() {
        super.update();

        if (Utils.RPGMAKER_NAME === 'MV' && this.visible && this.isReady()) {
            this.texture.update();
        }
    }

    // private methods

    _onLoad() {
        this.texture = PIXI.Texture.from(this.video);
        this.width = this._videoElement.width;
        this.height = this._videoElement.height;
        this.currentTime = 0;

        this.applyOptions();

        if (this._options.autoplay) {
            this.play();
        } else {
            this.stop();
        }

        this.video.onended = this._onEnd.bind(this);
    }

    _onEnd() {
        this.endVideo();
        this.updateEnd();

        if (this.loop) {
            this.play();
        }
    }

    // properties

    /**
     * @return {Boolean}
     */
    get autoplay() {
        return (this.video ?
            this.video.autoplay : false);
    }

    set autoplay(value) {
        if (this.video) {
            this.video.autoplay = value;
        }
    }

    /**
     * @return {Number}
     */
    get currentTime() {
        return (this._videoElement ?
            this._videoElement.currentTime : 0);
    }

    set currentTime(value) {
        if (this.video) {
            this.video.currentTime = value;
        }
    }

    /**
     * @return {Number}
     */
    get defaultPlaybackRate() {
        return (this.video ?
            this.video.defaultPlaybackRate * 100 : 100);
    }

    set defaultPlaybackRate(value) {
        if (this.video) {
            this.video.defaultPlaybackRate = value / 100;
        }
    }

    /**
     * @return {Number}
     */
    get duration() {
        return (this._videoElement ?
            this._videoElement.duration : 0);
    }

    /**
     * @return {Boolean}
     */
    get loop() {
        return this._loop;
    }

    set loop(value) {
        this._loop = value;
    }

    /**
     * @return {Boolean}
     */
    get muted() {
        return (this.video ?
            this.video.muted : true);
    }

    set muted(value) {
        if (this.video) {
            this.video.muted = value;
        }
    }

    set options(value) {
        this._options = value;
    }

    /**
     * @return {Number}
     */
    get playbackRate() {
        return (this.video ?
            this.video.playbackRate * 100 : 100);
    }

    set playbackRate(value) {
        if (this.video) {
            this.video.playbackRate = value / 100;
        }
    }

    /**
     * @return {Number}
     */
    get volume() {
        return (this.video ?
            this.video.volume * 100 : 100);
    }

    set volume(value) {
        if (this.video) {
            this.video.volume = value / 100;
        }
    }

    /**
     * @return {HTMLVideoElement}
     */
    get video() {
        return (this._videoElement ?
            this._videoElement.video : null);
    }

    /**
     * @return {VideoElement}
     */
    get videoElement() {
        return this._videoElement;
    }

}

if (Utils.RPGMAKER_NAME === 'MV') {

    Sprite_Video.prototype.show = function() {
        this.visible = true;
    };

    Sprite_Video.prototype.hide = function() {
        this.visible = false;
    };

}

//===========================================================================
// Sprite_VideoPlayer
//===========================================================================

class Sprite_VideoPlayer extends Sprite {

    initialize() {
        super.initialize();

        this._videos = [];
        this._animations = [];
        this._replacements = {};

        this.createLayers();
    }

    createLayers() {
        const maxLayers = VideoPlayerParams.mapMaxLayers || 5;

        for (let i = 0; i < maxLayers; i++) {
            const sprite = new Sprite_Video();

            sprite.hide();

            this._videos[i] = sprite;
            this.addChild(sprite);
        }
    }

    clearAnimations(layer) {
        this._animations = this._animations.filter(
            animation => animation.layer !== layer);
    }

    resetLayer(layer) {
        const sprite = this._videos[layer];

        if (sprite) {
            this.setBlendMode(layer, PIXI.BLEND_MODES.NORMAL);
            this.setPivot(layer, 0);
            this.setSpeed(layer, 100);
            this.setVolume(layer, 100);
            this.changeOpacity(layer, 255, 0);
            this.changePos(layer, new Point(0, 0), 0);
            this.changeScale(layer, new Point(1, 1), 0);
        }
    }

    isPlaying(layer) {
        if (layer >= 0) {
            return this._videos[layer] && this._videos[layer].isPlaying();
        }

        return this._videos.some(sprite => sprite && sprite.isPlaying());
    }

    isReplacing(layer) {
        if (layer >= 0) {
            return !!this._replacements[layer];
        }

        return Object.keys(this._replacements).length > 0;
    }

    getVideo(layer) {
        return this._videos[layer] || null;
    }

    setVolume(layer, value) {
        if (this._videos[layer]) {
            this._videos[layer].volume = value;
        }
    }

    setPivot(layer, value) {
        const sprite = this._videos[layer];

        if (Number.isFinite(value)) {
            sprite && sprite.pivot.set(value, value);
        } else {
            if (Utils.RPGMAKER_NAME === 'MV') {
                sprite && sprite.pivot.copy(value);
            } else {
                sprite && sprite.pivot.copyFrom(value);
            }
        }
    }

    setBlendMode(layer, value) {
        if (this._videos[layer]) {
            this._videos[layer].blendMode = value;
        }
    }

    setSpeed(layer, value) {
        if (this._videos[layer]) {
            this._videos[layer].playbackRate = value;
        }
    }

    changePos(layer, pos, duration = 0) {
        const sprite = this._videos[layer];

        if (!sprite) {
            return;
        }

        if (duration > 0) {
            this.addAnimation(layer, 'move', {
                pos,
                offsetX: (pos.x - sprite.x) / duration,
                offsetY: (pos.y - sprite.y) / duration
            }, duration);
        } else {
            if (Utils.RPGMAKER_NAME === 'MV') {
                sprite.position.copy(pos);
            } else {
                sprite.position.copyFrom(pos);
            }
        }
    }

    changeOpacity(layer, opacity, duration = 0) {
        const sprite = this._videos[layer];

        if (!sprite) {
            return;
        }

        if (duration > 0) {
            this.addAnimation(layer, 'opacity', {
                opacity,
                offsetOpacity: (opacity - sprite.opacity) / duration,
            }, duration);
        } else {
            sprite.opacity = opacity;
        }
    }

    changeScale(layer, scale, duration = 0) {
        const sprite = this._videos[layer];

        if (!sprite) {
            return;
        }

        if (duration > 0) {
            this.addAnimation(layer, 'scale', {
                scale,
                offsetX: (scale.x - sprite.scale.x) / duration,
                offsetY: (scale.y - sprite.scale.y) / duration
            }, duration);
        } else {
            if (Utils.RPGMAKER_NAME === 'MV') {
                sprite.scale.copy(scale);
            } else {
                sprite.scale.copyFrom(scale);
            }
        }
    }

    addAnimation(layer, type, data, duration = 1) {
        this._animations.push({ layer, type, data, duration });
    }

    /**
     * @param {Number} layer
     * @param {String} src
     * @param {Object} [options={}]
     * @return {Sprite_Video}
     */
    load(layer, src, options = {}) {
        const sprite = this._videos[layer];

        if (!sprite) {
            throw new Error(`Video on layer ${layer} can not be played!`);
        }

        this.stop(layer);

        sprite.loop = false;
        sprite.options = options;
        sprite.setVideoElement(VideoManager.load(src));

        return sprite;
    }

    /**
     * @param {Number} layer
     * @param {Object} [options={}]
     */
    play(layer, options = {}) {
        const sprite = this._videos[layer];

        if (!sprite) {
            throw new Error(`Video on layer ${layer} is not loaded!`);
        }

        sprite.loop = false;
        sprite.options = options;

        sprite.play().then(() => {
            sprite.show();
        });

        if (options.loop) {
            sprite.loop = true;
        }

        delete this._replacements[layer];
    }

    /**
     * @param {Number} layer
     */
    pause(layer) {
        this._videos[layer] && this._videos[layer].pause();
    }

    /**
     * @param {Number} layer
     */
    resume(layer) {
        this._videos[layer] && this._videos[layer].resume();
    }

    /**
     * @param {Number} layer
     * @param {String} src
     * @param {Object} [options={}]
     */
    replace(layer, src, options = {}) {
        const sprite = this._videos[layer];

        if (!sprite) {
            return;
        }

        this._replacements[layer] = true;

        const loadPromise = VideoManager.loadAsync(src);
        const endPromise = sprite.isPlaying() ?
            sprite.onEnd() : Promise.resolve(sprite);

        Promise.all([loadPromise, endPromise]).then(([videoElement]) => {
            const sprite = this._videos[layer];

            this.stop(layer, false);

            sprite.setVideoElement(videoElement);

            this.play(layer, options);
        });
    }

    /**
     * @param {Number} layer
     * @param {Boolean} [resetLayer=true]
     */
    stop(layer, resetLayer = true) {
        const sprite = this._videos[layer];

        if (sprite) {
            if (resetLayer) {
                this.resetLayer(layer);
            }

            sprite.hide();
            sprite.clearEndListeners();
            sprite.stop();
            sprite.destroyVideo();

            this.clearAnimations(layer);
        }

        delete this._replacements[layer];
    }

    stopAll() {
        for (let i = 0; i < this._videos.length; i++) {
            this.stop(i);
        }
    }

    // update methods

    updateBehavior() {
        if (SceneManager._scene instanceof Scene_Map) {
            const okBehavior = VideoPlayerParams.mapOkBehavior;
            const cancelBehavior = VideoPlayerParams.mapCancelBehavior;
            const skipVideo = okBehavior === 'skip' && (Input.isTriggered('ok') || TouchInput.isTriggered())
                || cancelBehavior === 'skip' && (Input.isTriggered('cancel') || TouchInput.isCancelled());

            if (skipVideo) {
                this._videos.forEach((video, layer) => {
                    if (video && video.loop && video.isPlaying()) {
                        this.stop(layer);
                    }
                });
            }
        }
    }

    updateAnimation(animation) {
        const sprite = this._videos[animation.layer];
        const data = animation.data;

        switch (animation.type) {
            case 'move': {
                if (animation.duration > 0) {
                    sprite.x += data.offsetX;
                    sprite.y += data.offsetY;
                } else {
                    if (Utils.RPGMAKER_NAME === 'MV') {
                        sprite.position.copy(data.pos);
                    } else {
                        sprite.position.copyFrom(data.pos);
                    }
                }
                break;
            }
            case 'opacity': {
                if (animation.duration > 0) {
                    sprite.opacity += data.offsetOpacity;
                } else {
                    sprite.opacity = data.opacity;
                }
                break;
            }
            case 'scale': {
                if (animation.duration > 0) {
                    sprite.scale.x += data.offsetX;
                    sprite.scale.y += data.offsetY;
                } else {
                    if (Utils.RPGMAKER_NAME === 'MV') {
                        sprite.scale.copy(data.scale);
                    } else {
                        sprite.scale.copyFrom(data.scale);
                    }
                }
                break;
            }
        }
    }

    updateAnimations() {
        this._animations = this._animations.filter(a => a.duration > 0 && !!this._videos[a.layer]);
        this._animations.forEach((animation) => {
            animation.duration--;
            this.updateAnimation(animation);
        });
    }

    update() {
        this.visible = this.children.length > 0;

        if (this.visible) {
            super.update();
            this.updateAnimations();
        }
    }

}

if (Utils.RPGMAKER_NAME === 'MV') {

    Sprite_VideoPlayer.prototype.show = function() {
        this.visible = true;
    };

    Sprite_VideoPlayer.prototype.hide = function() {
        this.visible = false;
    };

}

//===========================================================================
// SceneManager
//===========================================================================

const VideoPlayer_SceneManager_goto = SceneManager.goto;
SceneManager.goto = function(sceneClass) {
    if (sceneClass === Scene_Title && !Scene_TitleVideo.showed) {
        sceneClass = Scene_TitleVideo;
    }

    VideoPlayer_SceneManager_goto.call(this, sceneClass);
};

//===========================================================================
// Spriteset_Base
//===========================================================================

const VideoPlayer_Spriteset_Base_createUpperLayer =
    Spriteset_Base.prototype.createUpperLayer;
Spriteset_Base.prototype.createUpperLayer = function() {
    VideoPlayer_Spriteset_Base_createUpperLayer.apply(this, arguments);
    this.createVideoPlayer();
};

Spriteset_Base.prototype.createVideoPlayer = function() {
    this._videoPlayer = new Sprite_VideoPlayer();

    VideoManager.setVideoPlayer(this._videoPlayer);

    this.placeVideoPlayerBeforePictures();
};

Spriteset_Base.prototype.placeVideoPlayerBeforePictures = function() {
    this.addChildAt(this._videoPlayer, this.children.indexOf(this._pictureContainer));
};

Spriteset_Base.prototype.placeVideoPlayerAfterPictures = function() {
    this.addChildAt(this._videoPlayer, this.children.indexOf(this._pictureContainer) + 1);
};

//===========================================================================
// Spriteset_Map
//===========================================================================

const VideoPlayer_Spriteset_Map_createParallax =
    Spriteset_Map.prototype.createParallax;
Spriteset_Map.prototype.createParallax = function() {
    const videoParallax = $gameMap.videoParallaxName();

    if (videoParallax) {
        this._parallax = new Sprite_Video();
        this._parallax.setVideoElement(VideoManager.load(videoParallax));
        this._parallax.loop = true;
        this._parallax.muted = true;
        this._parallax.play();
        this._baseSprite.addChild(this._parallax);
    } else {
        VideoPlayer_Spriteset_Map_createParallax.apply(this, arguments);
    }
};

const VideoPlayer_Spriteset_Map_updateParallax =
    Spriteset_Map.prototype.updateParallax;
Spriteset_Map.prototype.updateParallax = function() {
    if (!$gameMap.isVideoParallax()) {
        VideoPlayer_Spriteset_Map_updateParallax.apply(this, arguments);
    } else if (this._parallax.texture) {
        this._parallax.x = -Math.round($gameMap.parallaxOx() % this._parallax.texture.width);
        this._parallax.y = -Math.round($gameMap.parallaxOy() % this._parallax.texture.height);
    }
};

//===========================================================================
// Scene_Base
//===========================================================================

const VideoPlayer_Scene_Base_isReady =
    Scene_Base.prototype.isReady;
Scene_Base.prototype.isReady = function() {
    return VideoPlayer_Scene_Base_isReady.apply(this, arguments)
        && VideoManager.isReady();
};

const VideoPlayer_Scene_Base_terminate =
    Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    VideoPlayer_Scene_Base_terminate.apply(this, arguments);
    VideoManager.setVideoPlayer(null);
};

//===========================================================================
// Scene_Title
//===========================================================================

const VideoPlayer_Scene_Title_createBackground =
    Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function() {
    VideoPlayer_Scene_Title_createBackground.apply(this, arguments);

    const params = VideoPlayerParams.titleBackground;

    if (params && params.src) {
        this._videoSprite = new Sprite_Video(VideoManager.load(params.src), {
            playbackRate: params.playbackRate,
            volume: params.volume,
            loop: true
        });
        this._videoSprite.play();

		if (this._backSprite1 && this._backSprite1.parent) {
			this._backSprite1.parent.removeChild(this._backSprite1);
		}

        if (this._backSprite2 && this._backSprite2.parent) {
			this._backSprite2.parent.removeChild(this._backSprite2);
		}

		if (Imported['Galv_CustomTitle']) {
			this._sLayer.addChildAt(this._videoSprite, 0);
		} else {
			this.addChild(this._videoSprite);
		}
    }
};

//===========================================================================
// Scene_Map
//===========================================================================

const VideoPlayer_Scene_Map_isMenuEnabled =
    Scene_Map.prototype.isMenuEnabled;
Scene_Map.prototype.isMenuEnabled = function() {
    return VideoPlayer_Scene_Map_isMenuEnabled.apply(this, arguments)
        && !VideoManager.isPlaying();
};

const VideoPlayer_Scene_Map_update =
    Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    VideoPlayer_Scene_Map_update.apply(this, arguments);
    VideoManager.update();
};

//===========================================================================
// Scene_Menu
//===========================================================================

const VideoPlayer_Scene_Menu_createBackground =
    Scene_Menu.prototype.createBackground;
Scene_Menu.prototype.createBackground = function() {
    if (VideoPlayerParams.menuBackground) {
        let index = this.children.length;

        if (this._backgroundSprite) {
            index = this.children.indexOf(this._backgroundSprite);

            this.removeChild(this._backgroundSprite);
        }

        this._videoBackgroundSprite = new Sprite_Video(
            VideoManager.load(VideoPlayerParams.menuBackground));
        this._videoBackgroundSprite.loop = true;
        this._videoBackgroundSprite.play();

        this.addChildAt(this._videoBackgroundSprite, index);
    } else {
        VideoPlayer_Scene_Menu_createBackground.apply(this, arguments);
    }
};

//===========================================================================
// Scene_VideoPlayer
//===========================================================================

class Scene_VideoPlayer extends Scene_Base {

    create() {
        this.createVideoSprites();
    }

    createVideoSprites() {
        this._videoSprites = this.videos.map((data) => {
            const videoElement = VideoManager.load(data.src);
            const sprite = new Sprite_Video(videoElement);

            sprite.hide();
            sprite.addEndListener(this.onVideoEnd.bind(this));

            if (data.muted) {
                sprite.muted = true;
            }

            if (data.playbackRate) {
                sprite.defaultPlaybackRate = data.playbackRate;
                sprite.playbackRate = data.playbackRate;
            }

            if (Number.isFinite(data.volume)) {
                sprite.volume = data.volume;
            }

            this.addChild(sprite);

            return sprite;
        });
    }

    onVideoEnd() {
        this.stopVideo();
        this.playNextVideo();

        if (!this._videoSprite) {
            this.popScene();
        }
    }

    stopVideo() {
        if (this._videoSprite) {
            this._videoSprite.stop();
            this._videoSprite.destroy();
        }
    }

    playNextVideo() {
        this._videoSprite = this._videoSprites.shift() || null;

        if (this._videoSprite) {
            this._videoSprite.play();
            this._videoSprite.show();
        }
    }

    start() {
        super.start();
        this.playNextVideo();
    }

    updateBehavior() {
        const okBehavior = this.okBehavior;
        const cancelBehavior = this.cancelBehavior;
        const skipVideo = okBehavior === 'skip' && (Input.isTriggered('ok') || TouchInput.isTriggered())
            || cancelBehavior === 'skip' && (Input.isTriggered('cancel') || TouchInput.isCancelled());

        if (skipVideo) {
            this.onVideoEnd();
            return;
        }

        const fastForward = okBehavior === 'fastForward' && (Input.isPressed('ok') || TouchInput.isPressed())
            || cancelBehavior === 'fastForward' && (Input.isPressed('cancel') || TouchInput.isPressed());

        if (fastForward) {
            this._videoSprite.playbackRate = this.fastForwardPlaybackRate;
        } else {
            this._videoSprite.playbackRate = this._videoSprite.defaultPlaybackRate;
        }
    }

    update() {
        super.update();

        if (this._videoSprite) {
            this.updateBehavior();
        }
    }

    // properties

    get videos() {
        return [];
    }

    get okBehavior() {
        return null;
    }

    get cancelBehavior() {
        return null;
    }

    get fastForwardPlaybackRate() {
        return 100;
    }

}

//===========================================================================
// Scene_TitleVideo
//===========================================================================

class Scene_TitleVideo extends Scene_VideoPlayer {

    popScene() {
        Scene_TitleVideo.showed = true;
        SceneManager.goto(Scene_Title);
    }

    // properties

    get videos() {
        return VideoPlayerParams.titleVideos.videos;
    }

    get okBehavior() {
        return VideoPlayerParams.titleVideos.okBehavior;
    }

    get cancelBehavior() {
        return VideoPlayerParams.titleVideos.cancelBehavior;
    }

    get fastForwardPlaybackRate() {
        return VideoPlayerParams.titleVideos.playbackRate;
    }

}

Scene_TitleVideo.showed = VideoPlayerParams.titleVideos.videos.length === 0;

if (Imported['DKTools'] && DKToolsParam.get('Quick Start', 'Enabled')) {

    Scene_TitleVideo.showed = true;

}

//===========================================================================
// Scene_CreditsVideo
//===========================================================================

class Scene_CreditsVideo extends Scene_VideoPlayer {

    // properties

    get videos() {
        return VideoPlayerParams.creditsVideos.videos;
    }

    get okBehavior() {
        return VideoPlayerParams.creditsVideos.okBehavior;
    }

    get cancelBehavior() {
        return VideoPlayerParams.creditsVideos.cancelBehavior;
    }

    get fastForwardPlaybackRate() {
        return VideoPlayerParams.creditsVideos.playbackRate;
    }

}

//===========================================================================
// Credits command
//===========================================================================

if (VideoPlayerParams.creditsVideos.commandName) {

    //===========================================================================
    // Scene_Title
    //===========================================================================

    const VideoPlayer_Scene_Title_createCommandWindow =
        Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        VideoPlayer_Scene_Title_createCommandWindow.apply(this, arguments);

        if (this._commandWindow) {
            this._commandWindow.setHandler('credits', this.commandCredits.bind(this));
        }
    };

    Scene_Title.prototype.commandCredits = function() {
        this._commandWindow && this._commandWindow.close();
        SceneManager.push(Scene_CreditsVideo);
    };

    //===========================================================================
    // Window_TitleCommand
    //===========================================================================

    const VideoPlayer_Window_TitleCommand_makeCommandList =
        Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        VideoPlayer_Window_TitleCommand_makeCommandList.apply(this, arguments);
        this.addCommand(VideoPlayerParams.creditsVideos.commandName, 'credits');
    };

}

//===========================================================================
// Compatibility with other plugins
//===========================================================================

if (Imported['DK_Game_Time']) {

    const VideoPlayer_Game_System_isGameTimeWindowVisible =
        Game_System.prototype.isGameTimeWindowVisible;
    Game_System.prototype.isGameTimeWindowVisible = function() {
        return VideoPlayer_Game_System_isGameTimeWindowVisible.apply(this, arguments)
            && !VideoManager.isPlaying();
    };

}
