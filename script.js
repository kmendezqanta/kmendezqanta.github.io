(function(){
    var script = { "definitions": [
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "label": "Lobby",
  "id": "panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "label": "Front",
     "id": "panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9",
       "backwardYaw": 176.56,
       "yaw": 0.07,
       "distance": 1
      }
     ],
     "pitch": 0,
     "partial": true,
     "vfov": 26.4,
     "hfov": 45,
     "hfovMax": 45,
     "hfovMin": 45,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_hq.jpeg",
          "width": 6434,
          "height": 3775,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86.jpeg",
          "width": 4002,
          "height": 2348
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9, this.camera_45A3A459_56E6_1F8F_41C3_CD4B6FF2F1F3); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 0.07,
           "hfov": 2,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_0_HS_0_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -5.87
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 2,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_0_HS_0_0.png",
              "width": 287,
              "height": 287
             }
            ]
           },
           "pitch": -5.87,
           "yaw": 0.07
          }
         ],
         "id": "overlay_42146AD6_5232_FC93_41B3_797A92779A37",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupMedia(this.window_46E2FCD6_56DA_2885_41C5_7BACCB34C298, this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33, this.playList_46AC518C_56DA_3885_41B4_FF90BD2CFBA5, '90%', '90%', false, false)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 5.99,
           "hfov": 2.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_0_HS_2_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -1.96
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 2.01,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_0_HS_2_0.png",
              "width": 287,
              "height": 287
             }
            ]
           },
           "pitch": -1.96,
           "yaw": 5.99
          }
         ],
         "id": "overlay_46D161D2_56DA_789D_41D5_05534229B96C",
         "data": {
          "label": "Image"
         }
        }
       ],
       "thumbnailUrl": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_t.jpg"
    },
    "backwardYaw": 0.07,
    "yaw": 176.56,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "label": "Corridor",
     "id": "panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "Services",
        "id": "panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6",
          "backwardYaw": -0.52,
          "yaw": 90.9,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Core & Shell Floor",
           "id": "panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
             "backwardYaw": -29.77,
             "yaw": -177.33,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "20",
              "id": "panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "19",
                 "id": "panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B",
                   "backwardYaw": -145.83,
                   "yaw": 56.28,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "18",
                    "id": "panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F",
                      "backwardYaw": -27.55,
                      "yaw": 133.67,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55",
                      "backwardYaw": -145.66,
                      "yaw": 43.04,
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfovMax": 110,
                    "hfov": 360,
                    "hfovMin": 110,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55, this.camera_453B54FE_56E6_1885_41C6_1002282F0185); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.31,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_0_HS_1_0.png",
                             "width": 149,
                             "height": 149
                            }
                           ]
                          },
                          "pitch": -7.05,
                          "yaw": 43.04
                         }
                        ],
                        "id": "overlay_3C98D04C_32A0_0E3C_4173_2FBE909EB2ED",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F, this.camera_452DF4F4_56E6_1886_41AB_3867A5C15009); this.setMediaBehaviour(this.playList_45E0B418_56E6_1F8D_41D2_9299B3E551D7, 0, this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.29,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_0_HS_0_0.png",
                             "width": 149,
                             "height": 149
                            }
                           ]
                          },
                          "pitch": -8,
                          "yaw": 133.67
                         }
                        ],
                        "id": "overlay_3C98E04C_32A0_0E3C_418A_C1721518A93A",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_hq.jpeg",
                         "width": 12288,
                         "height": 2048,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71.jpeg",
                         "width": 6144,
                         "height": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": {
                       "minimumZoomFactor": 1,
                       "fieldOfViewOverlayInsideColor": "#000000",
                       "class": "Map",
                       "label": "edificioF-n2",
                       "id": "map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                       "width": 532,
                       "fieldOfViewOverlayRadiusScale": 0.11,
                       "maximumZoomFactor": 1,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B.png",
                          "width": 532,
                          "height": 695
                         }
                        ]
                       },
                       "scaleMode": "fit_inside",
                       "overlays": [
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 264.2,
                          "height": 20,
                          "y": 641.9,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_42.png",
                             "width": 19,
                             "height": 19
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 264.2,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_42_map.gif",
                             "width": 9,
                             "height": 9
                            }
                           ]
                          },
                          "y": 641.9,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_075259D3_0B79_A1A5_4181_835D3AD7ECAD",
                         "data": {
                          "label": "Exterior"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 264.05,
                          "height": 20,
                          "y": 508.5,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_43.png",
                             "width": 19,
                             "height": 19
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 264.05,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_43_map.gif",
                             "width": 9,
                             "height": 9
                            }
                           ]
                          },
                          "y": 508.5,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_070B2A17_0B88_62AE_41A1_CAA4102ACF93",
                         "data": {
                          "label": "Entrance"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 1)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 263.35,
                          "height": 20,
                          "y": 427.4,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_44.png",
                             "width": 19,
                             "height": 19
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 263.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_44_map.gif",
                             "width": 9,
                             "height": 9
                            }
                           ]
                          },
                          "y": 427.4,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_07F27135_0B89_9EED_4190_3A2FEC3A4429",
                         "data": {
                          "label": "Lobby"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_440953FF_56E6_1883_41C6_3E241D3AFF7C.set('selectedIndex', -1); }, this); this.playList_440953FF_56E6_1883_41C6_3E241D3AFF7C.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 263.35,
                          "height": 20,
                          "y": 348.15,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_45.png",
                             "width": 19,
                             "height": 19
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 263.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_45_map.gif",
                             "width": 9,
                             "height": 9
                            }
                           ]
                          },
                          "y": 348.15,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_077BFB39_0B88_A2E2_4194_36D3ABDC094E",
                         "data": {
                          "label": "Corridor"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E.set('selectedIndex', -1); }, this); this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 265.3,
                          "height": 20,
                          "y": 226.3,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_46.png",
                             "width": 19,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 265.3,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_46_map.gif",
                             "width": 9,
                             "height": 10
                            }
                           ]
                          },
                          "y": 226.3,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_0547F77A_0B88_6166_41A3_43EDF973C320",
                         "data": {
                          "label": "Asensor"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 2)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 237.3,
                          "height": 20,
                          "y": 192.75,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_47.png",
                             "width": 19,
                             "height": 19
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 237.3,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_47_map.gif",
                             "width": 9,
                             "height": 9
                            }
                           ]
                          },
                          "y": 192.75,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_06A53100_0B89_BEA3_418E_B6BBC4728E40",
                         "data": {
                          "label": "ba\u00f1os"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 3)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 262.45,
                          "height": 20.33,
                          "y": 103.05,
                          "class": "HotspotMapOverlayImage",
                          "width": 20.33,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_48.png",
                             "width": 20,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20.33,
                          "x": 262.45,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_48_map.gif",
                             "width": 10,
                             "height": 10
                            }
                           ]
                          },
                          "y": 103.05,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20.33,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_07748230_0B88_62E2_41A6_7F29BAD08A0C",
                         "data": {
                          "label": "Main Floor 1"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_440B13FF_56E6_1883_41D2_7F394A6CF80A.set('selectedIndex', -1); }, this); this.playList_440B13FF_56E6_1883_41D2_7F394A6CF80A.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 134.45,
                          "height": 20.33,
                          "y": 104.05,
                          "class": "HotspotMapOverlayImage",
                          "width": 20.33,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_49.png",
                             "width": 20,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20.33,
                          "x": 134.45,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_49_map.gif",
                             "width": 10,
                             "height": 10
                            }
                           ]
                          },
                          "y": 104.05,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20.33,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_07562920_0B88_AEE3_419C_A144C02E7C2C",
                         "data": {
                          "label": "Main Floor 2"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 4)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 142.1,
                          "height": 20,
                          "y": 224.9,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_50.png",
                             "width": 19,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 142.1,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_50_map.gif",
                             "width": 9,
                             "height": 10
                            }
                           ]
                          },
                          "y": 224.9,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_06A812ED_0B8B_A362_41A4_1B5EB31ACF88",
                         "data": {
                          "label": "Rooms"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 6)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 346.75,
                          "height": 20.53,
                          "y": 222.25,
                          "class": "HotspotMapOverlayImage",
                          "width": 20.53,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_51.png",
                             "width": 20,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20.53,
                          "x": 346.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_51_map.gif",
                             "width": 10,
                             "height": 10
                            }
                           ]
                          },
                          "y": 222.25,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20.53,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_06D0DAEB_0B88_E366_41A1_3A05D3060671",
                         "data": {
                          "label": "Conference"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 7)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 402.65,
                          "height": 20.14,
                          "y": 284.95,
                          "class": "HotspotMapOverlayImage",
                          "width": 20.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_52.png",
                             "width": 20,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20.14,
                          "x": 402.65,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_52_map.gif",
                             "width": 10,
                             "height": 10
                            }
                           ]
                          },
                          "y": 284.95,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20.14,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_06FCBF6E_0B87_A17E_4197_18ED35E6B793",
                         "data": {
                          "label": "Comedor"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 8)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 263.75,
                          "height": 20,
                          "y": 356.45,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_59.png",
                             "width": 19,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 263.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_59_map.gif",
                             "width": 9,
                             "height": 10
                            }
                           ]
                          },
                          "y": 356.45,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_13D4588B_0BB9_AFA6_41A6_BB531CDCBA45",
                         "data": {
                          "label": "Empty1"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_441B0413_56E6_1F83_41BB_0BB562BFF212.set('selectedIndex', -1); }, this); this.playList_441B0413_56E6_1F83_41BB_0BB562BFF212.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 368.55,
                          "height": 20,
                          "y": 227.4,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_60.png",
                             "width": 19,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 368.55,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_60_map.gif",
                             "width": 9,
                             "height": 10
                            }
                           ]
                          },
                          "y": 227.4,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_1378E03F_0BBB_9EDD_418A_12CB6EC8B6E3",
                         "data": {
                          "label": "Empty2"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_45E0B418_56E6_1F8D_41D2_9299B3E551D7.set('selectedIndex', -1); }, this); this.playList_45E0B418_56E6_1F8D_41D2_9299B3E551D7.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 263.9,
                          "height": 23.42,
                          "y": 90.6,
                          "class": "HotspotMapOverlayImage",
                          "width": 23.42,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_61.png",
                             "width": 23,
                             "height": 23
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 23.42,
                          "x": 263.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_61_map.gif",
                             "width": 11,
                             "height": 11
                            }
                           ]
                          },
                          "y": 90.6,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 23.42,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_13A69BCC_0B88_61A2_41A0_2B561EDAE05C",
                         "data": {
                          "label": "Empty3"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_441BC413_56E6_1F83_41AF_E9EAE8CE8798.set('selectedIndex', -1); }, this); this.playList_441BC413_56E6_1F83_41AF_E9EAE8CE8798.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 131.8,
                          "height": 21.48,
                          "y": 225.5,
                          "class": "HotspotMapOverlayImage",
                          "width": 21.48,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_62.png",
                             "width": 21,
                             "height": 21
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 21.48,
                          "x": 131.8,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_62_map.gif",
                             "width": 10,
                             "height": 10
                            }
                           ]
                          },
                          "y": 225.5,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 21.48,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_1374AA8D_0B88_63A2_4199_5FDBCC02B08C",
                         "data": {
                          "label": "Empty4"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 9)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 264.8,
                          "height": 20,
                          "y": 274.55,
                          "class": "HotspotMapOverlayImage",
                          "width": 20,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_63.png",
                             "width": 19,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20,
                          "x": 264.8,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_63_map.gif",
                             "width": 9,
                             "height": 10
                            }
                           ]
                          },
                          "y": 274.55,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_173D01CF_0B9F_E1BE_4199_B71D3571C90F",
                         "data": {
                          "label": "parking garage 1"
                         }
                        },
                        {
                         "useHandCursor": true,
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_441DE413_56E6_1F83_41C4_BD61CB181F0E.set('selectedIndex', -1); }, this); this.playList_441DE413_56E6_1F83_41C4_BD61CB181F0E.set('selectedIndex', 0)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 268.75,
                          "height": 20.44,
                          "y": 135.15,
                          "class": "HotspotMapOverlayImage",
                          "width": 20.44,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_64.png",
                             "width": 20,
                             "height": 20
                            }
                           ]
                          }
                         },
                         "map": {
                          "width": 20.44,
                          "x": 268.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_HS_64_map.gif",
                             "width": 10,
                             "height": 10
                            }
                           ]
                          },
                          "y": 135.15,
                          "class": "HotspotMapOverlayMap",
                          "offsetY": 0,
                          "height": 20.44,
                          "offsetX": 0
                         },
                         "class": "AreaHotspotMapOverlay",
                         "rollOverDisplay": true,
                         "id": "overlay_171FBFE9_0B99_A165_4158_EA8F13C49159",
                         "data": {
                          "label": "parking garage2"
                         }
                        }
                       ],
                       "fieldOfViewOverlayOutsideOpacity": 0,
                       "initialZoomFactor": 1,
                       "fieldOfViewOverlayInsideOpacity": 0.4,
                       "fieldOfViewOverlayOutsideColor": "#000000",
                       "height": 695,
                       "thumbnailUrl": "media/map_0D6DCBE7_0AB5_3086_419A_23898788062B_t.png"
                      },
                      "x": 378.55,
                      "angle": -178.44,
                      "y": 237.4,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_t.jpg"
                   },
                   "backwardYaw": 133.67,
                   "yaw": -27.55,
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfovMax": 110,
                 "hfov": 360,
                 "hfovMin": 110,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71, this.camera_4598D49E_56E6_1882_41C6_02318220FFD9); this.setMediaBehaviour(this.playList_441B0413_56E6_1F83_41BB_0BB562BFF212, 0, this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.33,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_0_HS_1_0.png",
                          "width": 149,
                          "height": 149
                         }
                        ]
                       },
                       "pitch": -5.78,
                       "yaw": -27.55
                      }
                     ],
                     "id": "overlay_22AF712D_32A0_0E7F_41C0_5E7564D1DEB9",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B, this.camera_4589448B_56E6_1883_41C4_27662404F3B4); this.setMediaBehaviour(this.playList_441BC413_56E6_1F83_41AF_E9EAE8CE8798, 0, this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.3,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_0_HS_0_0.png",
                          "width": 149,
                          "height": 149
                         }
                        ]
                       },
                       "pitch": -7.55,
                       "yaw": 56.28
                      }
                     ],
                     "id": "overlay_22AF112D_32A0_0E7F_4194_D7C9D7243584",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.28,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_0_HS_2_0.png",
                          "width": 149,
                          "height": 149
                         }
                        ]
                       },
                       "pitch": -8.55,
                       "yaw": -1.06
                      }
                     ],
                     "id": "overlay_22AFC12D_32A0_0E7F_41B5_21616AB4B6F5",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_hq.jpeg",
                      "width": 12288,
                      "height": 2048,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F.jpeg",
                      "width": 6144,
                      "height": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                   "x": 275.61,
                   "angle": 180.53,
                   "y": 102.31,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_t.jpg"
                },
                "backwardYaw": 56.28,
                "yaw": -145.83,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55",
                "backwardYaw": 142.87,
                "yaw": -34.7,
                "distance": 1
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfovMax": 110,
              "hfov": 360,
              "hfovMin": 110,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F, this.camera_46A33634_56E6_1B86_41D0_9795E7467246); this.setMediaBehaviour(this.playList_45E0B418_56E6_1F8D_41D2_9299B3E551D7, 0, this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.28,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_0_HS_1_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -8.54,
                    "yaw": -145.83
                   }
                  ],
                  "id": "overlay_3C74A852_32A1_FE25_4167_97E82A082144",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55, this.camera_46A8363E_56E6_1B82_41D3_3FFFA1AD2D60); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.3,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_0_HS_0_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -7.31,
                    "yaw": -34.7
                   }
                  ],
                  "id": "overlay_3C748852_32A1_FE25_41C1_F404290ECD73",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_hq.jpeg",
                   "width": 12288,
                   "height": 2048,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                "x": 142.54,
                "angle": 176.55,
                "y": 236.24,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_t.jpg"
             },
             "backwardYaw": -34.7,
             "yaw": 142.87,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71",
             "backwardYaw": 43.04,
             "yaw": -145.66,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfovMax": 110,
           "hfov": 360,
           "hfovMin": 110,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B, this.camera_42BDC56D_56E6_1987_41AA_1429500A936C); this.setMediaBehaviour(this.playList_441BC413_56E6_1F83_41AF_E9EAE8CE8798, 0, this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.28,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_0_HS_1_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -8.56,
                 "yaw": 142.87
                }
               ],
               "id": "overlay_3FEA6D7D_3260_16DC_41BB_A4D076DA2E25",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71, this.camera_428B4580_56E6_197D_41B2_184446BF8E2A); this.setMediaBehaviour(this.playList_441B0413_56E6_1F83_41BB_0BB562BFF212, 0, this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.3,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_0_HS_0_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -7.22,
                 "yaw": -145.66
                }
               ],
               "id": "overlay_3FE98D7D_3260_16DC_41C8_E343F972EE47",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13, this.camera_42AE5563_56E6_1983_41A7_41B45E28E975); this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.25,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_0_HS_2_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -9.78,
                 "yaw": -177.33
                }
               ],
               "id": "overlay_3FE9AD7D_3260_16DC_4199_113A1E3E95C1",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_hq.jpeg",
                "width": 12288,
                "height": 2048,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
             "x": 273.75,
             "angle": 177.21,
             "y": 366.45,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_t.jpg"
          },
          "backwardYaw": -177.33,
          "yaw": -29.77,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Restrooms",
           "id": "panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
             "backwardYaw": -125.7,
             "yaw": -153.74,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfovMax": 110,
           "hfov": 360,
           "hfovMin": 110,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "pitch": 35.9,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_3EAC3C28_3260_1664_41B9_ED5FCA232D9E",
               "yaw": 101.52
              },
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "pitch": 58.76,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_3EAC5C28_3260_1664_41C3_6AC54B8EAA0D",
               "yaw": -85.9
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_29371590_38F6_3851_41C5_E2D568ADBABA, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_0_HS_1_0.png",
                    "width": 179,
                    "height": 179
                   }
                  ]
                 },
                 "pitch": -10.24,
                 "yaw": 161.45
                }
               ],
               "id": "overlay_3EAC6C28_3260_1664_41C0_2431E7CFE09F",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13, this.camera_429A958C_56E6_1885_41D0_13BBF7D1CDD5); this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -153.74,
                 "hfov": 12.97,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -21.78
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.97,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_0_HS_2_0.png",
                    "width": 249,
                    "height": 244
                   }
                  ]
                 },
                 "pitch": -21.78,
                 "yaw": -153.74
                }
               ],
               "id": "overlay_3EAC9C28_3260_1664_41B4_FB3B0A49405C",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "showEasing": "cubic_in",
               "showDuration": 500,
               "popupMaxWidth": "95%",
               "yaw": 161.45,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0",
               "hfov": 9.88,
               "rotationX": 0,
               "rotationY": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0_0_1.jpg",
                  "width": 1024,
                  "height": 682
                 }
                ]
               },
               "pitch": -10.24,
               "popupDistance": 100,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%"
              }
             ],
             "thumbnailUrl": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_hq.jpeg",
                "width": 12288,
                "height": 2048,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
             "x": 247.3,
             "angle": -100.96,
             "y": 202.75,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_t.jpg"
          },
          "backwardYaw": -153.74,
          "yaw": -125.7,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Main Floor",
           "id": "panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Main Floor 2",
              "id": "panorama_3F03EA30_32A0_1264_41B3_840B31EA3712",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6",
                "backwardYaw": -173.59,
                "yaw": 2.72,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "Rooms Area",
                 "id": "panorama_3D4A7011_3260_0E24_4199_1362E5A38227",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "Conference Room",
                    "id": "panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "Dining Room",
                       "id": "panorama_3F8CB334_3260_326D_41AA_4807852EB634",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8",
                         "backwardYaw": 68.38,
                         "yaw": 179.45,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "Relaxation Room",
                          "id": "panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_3F8CB334_3260_326D_41AA_4807852EB634",
                            "backwardYaw": 122.05,
                            "yaw": -101.44,
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfovMax": 110,
                          "hfov": 360,
                          "hfovMin": 110,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3F8CB334_3260_326D_41AA_4807852EB634, this.camera_455E64E8_56E6_188D_41BD_2EAF833419D4); this.mainPlayList.set('selectedIndex', 7)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.29,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_0_HS_0_0.png",
                                   "width": 149,
                                   "height": 149
                                  }
                                 ]
                                },
                                "pitch": -7.76,
                                "yaw": -101.44
                               }
                              ],
                              "id": "overlay_3FD48575_3260_16EC_419D_E39443FBC538",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "bleaching": 0.7,
                              "bleachingDistance": 0.4,
                              "pitch": 33.24,
                              "class": "LensFlarePanoramaOverlay",
                              "id": "overlay_3FD49575_3260_16EC_41B9_64401CDC2357",
                              "yaw": -0.95
                             },
                             {
                              "bleaching": 0.7,
                              "bleachingDistance": 0.4,
                              "pitch": 37.05,
                              "class": "LensFlarePanoramaOverlay",
                              "id": "overlay_3FD4A575_3260_16EC_41B3_504AA158D205",
                              "yaw": -175.43
                             },
                             {
                              "bleaching": 0.7,
                              "bleachingDistance": 0.4,
                              "pitch": 17.62,
                              "class": "LensFlarePanoramaOverlay",
                              "id": "overlay_3FD44575_3260_16EC_4199_C33142D2665F",
                              "yaw": 120.19
                             }
                            ],
                            "thumbnailUrl": "media/panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_hq.jpeg",
                               "width": 12288,
                               "height": 2048,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B.jpeg",
                               "width": 6144,
                               "height": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "thumbnailUrl": "media/panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_t.jpg"
                         },
                         "backwardYaw": -101.44,
                         "yaw": 122.05,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfovMax": 110,
                       "hfov": 360,
                       "hfovMin": 110,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8, this.camera_45AEC468_56E6_1F8D_41B0_A3294E34B858); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.33,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_0_HS_0_0.png",
                                "width": 149,
                                "height": 149
                               }
                              ]
                             },
                             "pitch": -5.85,
                             "yaw": 179.45
                            }
                           ],
                           "id": "overlay_3F8CA334_3260_326D_41C6_01669946365A",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B, this.camera_45BBD47C_56E6_1F85_41A4_151E5FD3FD08); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.36,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_0_HS_1_0.png",
                                "width": 149,
                                "height": 149
                               }
                              ]
                             },
                             "pitch": -2.93,
                             "yaw": 122.05
                            }
                           ],
                           "id": "overlay_3F8F5334_3260_326D_41AF_6123564B6D7F",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "pitch": 4.67,
                           "class": "LensFlarePanoramaOverlay",
                           "id": "overlay_3F8F6334_3260_326D_41B8_4A7AEBDD2487",
                           "yaw": 43.24
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "pitch": 8.1,
                           "class": "LensFlarePanoramaOverlay",
                           "id": "overlay_3F8F0334_3260_326D_41BE_AB74148D2448",
                           "yaw": -145.33
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "pitch": 37.43,
                           "class": "LensFlarePanoramaOverlay",
                           "id": "overlay_3F8F3334_3260_326D_41C2_A3E5D48368ED",
                           "yaw": 76.38
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupMedia(this.window_25978982_393D_C831_41AE_0C30BC10DA9F, this.album_22792834_393E_C851_41B7_E4EC96DFD835, this.playList_588A1E68_56DA_2B8D_41C5_E8B312A5D661, '90%', '90%', false, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 10.04,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_0_HS_2_0.png",
                                "width": 179,
                                "height": 179
                               }
                              ]
                             },
                             "pitch": 0.87,
                             "yaw": 71.84
                            }
                           ],
                           "id": "overlay_3F8FD334_3260_326D_4184_89549F4E3008",
                           "data": {
                            "label": "Image"
                           }
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupMedia(this.window_23C02BF5_393E_CFD3_41C6_5E2E75A5BB3A, this.album_2340DDC4_393E_4831_41BB_67E523D40E26, this.playList_588A5E68_56DA_2B8D_41CE_9B5514C0B165, '90%', '90%', false, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.99,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_0_HS_3_0.png",
                                "width": 179,
                                "height": 179
                               }
                              ]
                             },
                             "pitch": -5.77,
                             "yaw": -1.22
                            }
                           ],
                           "id": "overlay_3F8FC334_3260_326D_41BF_299FD9BDD138",
                           "data": {
                            "label": "Image"
                           }
                          }
                         ],
                         "thumbnailUrl": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_hq.jpeg",
                            "width": 12288,
                            "height": 2048,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634.jpeg",
                            "width": 6144,
                            "height": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                         "x": 412.72,
                         "angle": 158.46,
                         "y": 295.02,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_3F8CB334_3260_326D_41AA_4807852EB634_t.jpg"
                      },
                      "backwardYaw": 179.45,
                      "yaw": 68.38,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227",
                      "backwardYaw": 71.03,
                      "yaw": -116.58,
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfovMax": 110,
                    "hfov": 360,
                    "hfovMin": 110,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227, this.camera_4230E5D3_56E6_1882_419F_DBA39A0E4491); this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.18,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_0_HS_1_0.png",
                             "width": 149,
                             "height": 149
                            }
                           ]
                          },
                          "pitch": -12.22,
                          "yaw": -116.58
                         }
                        ],
                        "id": "overlay_3D9EC1A2_3260_0E65_41BC_3E87FFAC049E",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3F8CB334_3260_326D_41AA_4807852EB634, this.camera_422165C7_56E6_1883_418B_A35D0154DAF3); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.27,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_0_HS_0_0.png",
                             "width": 149,
                             "height": 149
                            }
                           ]
                          },
                          "pitch": -8.76,
                          "yaw": 68.38
                         }
                        ],
                        "id": "overlay_3D9ED1A2_3260_0E65_41C3_05003B885321",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "pitch": 6.19,
                        "class": "LensFlarePanoramaOverlay",
                        "id": "overlay_3D9931A2_3260_0E65_41AC_2D774AF28291",
                        "yaw": -5.14
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupMedia(this.window_20A39569_3933_D8F3_418F_93DCBE108601, this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC, this.playList_588BAE5E_56DA_2B85_41A5_AF60866DB5DA, '90%', '90%', false, false)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.73,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_0_HS_2_0.png",
                             "width": 179,
                             "height": 179
                            }
                           ]
                          },
                          "pitch": -14.27,
                          "yaw": 10.24
                         }
                        ],
                        "id": "overlay_3D9911A2_3260_0E65_41AB_0C131F5006EC",
                        "data": {
                         "label": "Image"
                        }
                       }
                      ],
                      "thumbnailUrl": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_hq.jpeg",
                         "width": 12288,
                         "height": 2048,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8.jpeg",
                         "width": 6144,
                         "height": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                      "x": 357.01,
                      "angle": 89.26,
                      "y": 232.51,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_t.jpg"
                   },
                   "backwardYaw": -116.58,
                   "yaw": 71.03,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_3F03EA30_32A0_1264_41B3_840B31EA3712",
                   "backwardYaw": 98.92,
                   "yaw": -87.95,
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfovMax": 110,
                 "hfov": 360,
                 "hfovMin": 110,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3F03EA30_32A0_1264_41B3_840B31EA3712, this.camera_4277B5A0_56E6_18BD_41C3_171037F705BA); this.setMediaBehaviour(this.playList_440B13FF_56E6_1883_41D2_7F394A6CF80A, 0, this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.22,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_1_0.png",
                          "width": 149,
                          "height": 149
                         }
                        ]
                       },
                       "pitch": -10.86,
                       "yaw": -87.95
                      }
                     ],
                     "id": "overlay_3D4A4011_3260_0E24_41B1_062579F25A22",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8, this.camera_42683596_56E6_1885_4193_9B76B20051D2); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.37,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_0_0.png",
                          "width": 149,
                          "height": 149
                         }
                        ]
                       },
                       "pitch": -1.46,
                       "yaw": 71.03
                      }
                     ],
                     "id": "overlay_3D4A5011_3260_0E24_4173_5FFFDF4996A9",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "pitch": 30.19,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_3D4A9011_3260_0E24_416A_5091B08FE54B",
                     "yaw": 7.05
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "pitch": 19.52,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_3D4AE011_3260_0E24_41B9_E26E9152C31D",
                     "yaw": -105.33
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "pitch": 33.24,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_3D4AC011_3260_0E24_41C5_56C7BB53F866",
                     "yaw": 127.43
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_36080B6A_38CE_48F1_41A5_D451E17701EC, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_2935F591_38F6_3853_41B5_258F93608698, null, null, null, null, false)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.01,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_3_0.png",
                          "width": 179,
                          "height": 179
                         }
                        ]
                       },
                       "pitch": -4.51,
                       "yaw": -33.76
                      }
                     ],
                     "id": "overlay_3D4B3011_3260_0E24_41C2_BF1DF5D9AF7F",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupMedia(this.window_192A635A_14CB_2FB7_41AB_E93F3FDFF371, this.album_0276D841_0C26_DC61_41A0_FF660A697938, this.playList_58931E5E_56DA_2B85_41A2_2AF185E3B836, '90%', '90%', false, false)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.36,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_6_0.png",
                          "width": 149,
                          "height": 149
                         }
                        ]
                       },
                       "pitch": 2.88,
                       "yaw": -7.06
                      }
                     ],
                     "id": "overlay_3D4B0011_3260_0E24_41B7_5E59ADFDC9A1",
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 12.18,
                       "hfov": 30.69,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_5_0_map.gif",
                          "width": 74,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 2.58
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_5_0.png",
                          "width": 548,
                          "height": 117
                         }
                        ]
                       },
                       "pitch": 2.58,
                       "yaw": 12.18,
                       "hfov": 30.69,
                       "distance": 50
                      }
                     ],
                     "id": "overlay_3D4B1011_3260_0E24_41B3_89C0FAE53CF9",
                     "data": {
                      "label": "Costum Spaces"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupMedia(this.window_217EA382_3936_D831_41BC_C966E3E95B02, this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C, this.playList_5894FE5E_56DA_2B85_41D4_B48C04B2CEF3, '90%', '90%', false, false)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 9.94,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_8_0.png",
                          "width": 179,
                          "height": 179
                         }
                        ]
                       },
                       "pitch": -8.3,
                       "yaw": -168.34
                      }
                     ],
                     "id": "overlay_3D4B7011_3260_0E24_41C5_CC0D28C0DB99",
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupMedia(this.window_2FEF3D4F_3932_C8CF_41AA_3C51A2B0D887, this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588, this.playList_58955E5E_56DA_2B85_41C3_8BE5E1C4C5AE, '90%', '90%', false, false)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.04,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_0_HS_7_0.png",
                          "width": 179,
                          "height": 179
                         }
                        ]
                       },
                       "pitch": -0.41,
                       "yaw": 102.99
                      }
                     ],
                     "id": "overlay_3D4BA011_3260_0E24_41C1_A942D4A312CF",
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "showEasing": "cubic_in",
                     "showDuration": 500,
                     "popupMaxWidth": "95%",
                     "yaw": -33.76,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_36080B6A_38CE_48F1_41A5_D451E17701EC",
                     "hfov": 10.01,
                     "rotationX": 0,
                     "rotationY": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "url": "media/popup_36080B6A_38CE_48F1_41A5_D451E17701EC_0_1.jpg",
                        "width": 1024,
                        "height": 682
                       }
                      ]
                     },
                     "pitch": -4.51,
                     "popupDistance": 100,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_hq.jpeg",
                      "width": 12288,
                      "height": 2048,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227.jpeg",
                      "width": 6144,
                      "height": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                   "x": 152.1,
                   "angle": 77.4,
                   "y": 234.9,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3D4A7011_3260_0E24_4199_1362E5A38227_t.jpg"
                },
                "backwardYaw": -87.95,
                "yaw": 98.92,
                "distance": 1
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfovMax": 110,
              "hfov": 360,
              "hfovMin": 110,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6, this.camera_456694AE_56E6_1885_41D4_C4FC521BED27); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.33,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_0_HS_1_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -5.98,
                    "yaw": 2.72
                   }
                  ],
                  "id": "overlay_3F03FA30_32A0_1264_41C5_4098616B4AEE",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227, this.camera_457394C2_56E6_1882_41BE_F7831DD8D03C); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.33,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_0_HS_0_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -5.93,
                    "yaw": 98.92
                   }
                  ],
                  "id": "overlay_3F03CA30_32A0_1264_41C0_848D8D03F423",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "pitch": 6.57,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_3F03DA30_32A0_1264_41B5_A832E003F4E3",
                  "yaw": -164.38
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupMedia(this.window_2356ABE8_3D7C_C938_41CC_83B459DA9448, this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897, this.playList_588E3E68_56DA_2B8D_41C6_C4FC22ACED13, '90%', '90%', false, false)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.36,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_0_HS_2_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -2.38,
                    "yaw": -89.75
                   }
                  ],
                  "id": "overlay_3F03AA30_32A0_1264_41C0_BD37C5DE89DD",
                  "data": {
                   "label": "Image"
                  }
                 }
                ],
                "thumbnailUrl": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_hq.jpeg",
                   "width": 12288,
                   "height": 2048,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                "x": 144.62,
                "angle": 83.18,
                "y": 114.22,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_t.jpg"
             },
             "backwardYaw": 2.72,
             "yaw": -173.59,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
             "backwardYaw": -94.67,
             "yaw": 95.31,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfovMax": 110,
           "hfov": 360,
           "hfovMin": 110,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3F03EA30_32A0_1264_41B3_840B31EA3712, this.camera_46AFA648_56E6_1B8D_4176_1CB381D74BE3); this.setMediaBehaviour(this.playList_440B13FF_56E6_1883_41D2_7F394A6CF80A, 0, this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.29,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_0_HS_1_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -7.82,
                 "yaw": -173.59
                }
               ],
               "id": "overlay_3CC34567_3261_F6EC_41B7_10FD34ED4C34",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13, this.camera_46B53657_56E6_1B83_4162_259D1F22D653); this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.24,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_0_HS_0_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -10,
                 "yaw": 95.31
                }
               ],
               "id": "overlay_3CC31567_3261_F6EC_4199_51BA61D261E3",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_hq.jpeg",
                "width": 12288,
                "height": 2048,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
             "x": 272.62,
             "angle": 88.18,
             "y": 113.22,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_t.jpg"
          },
          "backwardYaw": 95.31,
          "yaw": -94.67,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Parking Garage",
           "id": "panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "22",
              "id": "panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17",
                "backwardYaw": 5.64,
                "yaw": 179.24,
                "distance": 1
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfovMax": 110,
              "hfov": 360,
              "hfovMin": 110,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17, this.camera_46A0162A_56E6_1B8D_41CD_65FB552B1EFE); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.22,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_0_HS_0_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -10.77,
                    "yaw": 179.24
                   }
                  ],
                  "id": "overlay_3DD83197_32A0_0E2C_41C7_8CAD052BC153",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.34,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_0_HS_1_0.png",
                       "width": 149,
                       "height": 149
                      }
                     ]
                    },
                    "pitch": -4.96,
                    "yaw": 158.21
                   }
                  ],
                  "id": "overlay_3DDBC197_32A0_0E2C_41B2_9A6F01199BE3",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_hq.jpeg",
                   "width": 12288,
                   "height": 2048,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
                "x": 278.97,
                "angle": 5.58,
                "y": 145.37,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_t.jpg"
             },
             "backwardYaw": 179.24,
             "yaw": 5.64,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
             "backwardYaw": 29.61,
             "yaw": 35.85,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfovMax": 110,
           "hfov": 360,
           "hfovMin": 110,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13, this.camera_4253D5BC_56E6_1885_41C6_050542901987); this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.33,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_0_HS_1_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -5.45,
                 "yaw": 35.85
                }
               ],
               "id": "overlay_3F29B97F_32A0_3EDC_41B3_E2D5FFA9DFD3",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85, this.camera_424565AA_56E6_188D_41C1_AF5DBE16F233); this.setMediaBehaviour(this.playList_441DE413_56E6_1F83_41C4_BD61CB181F0E, 0, this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.25,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_0_HS_0_0.png",
                    "width": 149,
                    "height": 149
                   }
                  ]
                 },
                 "pitch": -9.91,
                 "yaw": 5.64
                }
               ],
               "id": "overlay_3F29A97F_32A0_3EDC_41C5_D183D79AED8D",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_hq.jpeg",
                "width": 12288,
                "height": 2048,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
             "x": 274.8,
             "angle": -4.24,
             "y": 284.55,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_t.jpg"
          },
          "backwardYaw": 35.85,
          "yaw": 29.61,
          "distance": 1
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfovMax": 110,
        "hfov": 360,
        "hfovMin": 110,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01, this.camera_42C3953A_56E6_198D_41CD_C964F3CE92FE); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.32,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_0_0.png",
                 "width": 149,
                 "height": 149
                }
               ]
              },
              "pitch": -6.43,
              "yaw": -125.7
             }
            ],
            "id": "overlay_3DF3F457_32E0_162C_41BC_3021EF5018EB",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6, this.camera_42E6A526_56E6_1985_41C2_125AB36E2D86); this.setMediaBehaviour(this.playList_440953FF_56E6_1883_41C6_3E241D3AFF7C, 0, this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.23,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_2_0.png",
                 "width": 149,
                 "height": 149
                }
               ]
              },
              "pitch": -10.58,
              "yaw": 90.9
             }
            ],
            "id": "overlay_3DF3A457_32E0_162C_41A4_8C830F39A058",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6, this.camera_42D1754E_56E6_1985_41CD_F6A2FCCA7EE4); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.34,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_1_0.png",
                 "width": 149,
                 "height": 149
                }
               ]
              },
              "pitch": -5.26,
              "yaw": -94.67
             }
            ],
            "id": "overlay_3DF3B457_32E0_162C_41C5_4593258E2A3C",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "bleaching": 0.7,
            "bleachingDistance": 0.4,
            "pitch": 36.67,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_3DF06457_32E0_162C_4189_0F58B41F317D",
            "yaw": -2.1
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17, this.camera_42DF0559_56E6_198F_41BC_63CFF3178518); this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.85,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_3_0.png",
                 "width": 149,
                 "height": 149
                }
               ]
              },
              "pitch": -20.32,
              "yaw": 29.61
             }
            ],
            "id": "overlay_3DF04457_32E0_162C_41C0_638BC1A33D15",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "bleaching": 0.7,
            "bleachingDistance": 0.4,
            "pitch": 49.62,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_3DF05457_32E0_162C_41A5_CE01D658880F",
            "yaw": 176.95
           },
           {
            "bleaching": 0.7,
            "bleachingDistance": 0.4,
            "pitch": 51.9,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_3DF03457_32E0_162C_41B9_E2527A767344",
            "yaw": -179.24
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_37C7D72D_38CE_5873_41BE_872E844D4277, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_2931958C_38F6_3831_41AE_5FEFD9204283, null, null, null, null, false)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.93,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_5_0.png",
                 "width": 179,
                 "height": 179
                }
               ]
              },
              "pitch": -8.67,
              "yaw": -0.45
             }
            ],
            "id": "overlay_3DF01457_32E0_162C_41B6_9BF0F819F17F",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55, this.camera_42F41530_56E6_199D_41BC_A79C5BF6753F); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -29.77,
              "hfov": 8.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_6_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -7.22
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.3,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_0_HS_6_0.png",
                 "width": 149,
                 "height": 149
                }
               ]
              },
              "pitch": -7.22,
              "yaw": -29.77
             }
            ],
            "id": "overlay_3DF0F457_32E0_162C_41C7_E941A47364F5",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": -0.45,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_37C7D72D_38CE_5873_41BE_872E844D4277",
            "hfov": 9.93,
            "rotationX": 0,
            "rotationY": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_37C7D72D_38CE_5873_41BE_872E844D4277_0_1.jpg",
               "width": 1024,
               "height": 682
              }
             ]
            },
            "pitch": -8.67,
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%"
           }
          ],
          "thumbnailUrl": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_hq.jpeg",
             "width": 12288,
             "height": 2048,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13.jpeg",
             "width": 6144,
             "height": 1024
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
          "x": 275.3,
          "angle": 87.68,
          "y": 236.3,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_t.jpg"
       },
       "backwardYaw": 90.9,
       "yaw": -0.52,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9",
       "backwardYaw": -2.09,
       "yaw": 177,
       "distance": 1
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfovMax": 110,
     "hfov": 360,
     "hfovMin": 110,
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13, this.camera_454174CC_56E6_1885_4195_3015723E99CD); this.setMediaBehaviour(this.playList_440BC3FF_56E6_1883_41C4_B9DD924E020E, 0, this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.36,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_0_HS_0_0.png",
              "width": 149,
              "height": 149
             }
            ]
           },
           "pitch": -2.57,
           "yaw": -0.52
          }
         ],
         "id": "overlay_3C1BF2B8_32A0_3264_41A2_6C9D73F482C5",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9, this.camera_455094DE_56E6_1885_41CB_97A05566ED59); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.24,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_0_HS_1_0.png",
              "width": 149,
              "height": 149
             }
            ]
           },
           "pitch": -10.15,
           "yaw": 177
          }
         ],
         "id": "overlay_3C1812B8_32A0_3264_41B0_3A63DCB958EC",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "bleaching": 0.7,
         "bleachingDistance": 0.4,
         "pitch": 78.57,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_3C1832B8_32A0_3264_41C1_E04A658B0160",
         "yaw": -5.9
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupMedia(this.window_24A9CA74_3932_48D1_41BB_F3E9E8CECEC3, this.album_2736F94F_3933_C8CF_41C4_12631C85E218, this.playList_58838E72_56DA_2B9D_41CD_64BFCB0D8888, '90%', '90%', false, false)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.02,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_0_HS_2_0.png",
              "width": 179,
              "height": 179
             }
            ]
           },
           "pitch": -4.1,
           "yaw": -47.1
          }
         ],
         "id": "overlay_3C1852B8_32A0_3264_41AF_FB8FFF6DCFA0",
         "data": {
          "label": "Image"
         }
        }
       ],
       "thumbnailUrl": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_t.jpg",
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_hq.jpeg",
          "width": 12288,
          "height": 2048,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6.jpeg",
          "width": 6144,
          "height": 1024
         }
        ]
       }
      }
     ],
     "mapLocations": [
      {
       "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
       "x": 273.35,
       "angle": 0,
       "y": 358.15,
       "class": "PanoramaMapLocation"
      }
     ],
     "thumbnailUrl": "media/panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_t.jpg"
    },
    "backwardYaw": 177,
    "yaw": -2.09,
    "distance": 1
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfovMax": 110,
  "hfov": 360,
  "hfovMin": 110,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6, this.camera_45197519_56E6_198E_41A2_D6220669D799); this.setMediaBehaviour(this.playList_440953FF_56E6_1883_41C6_3E241D3AFF7C, 0, this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9)",
        "mapColor": "image"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.21,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_0_HS_1_0.png",
           "width": 149,
           "height": 149
          }
         ]
        },
        "pitch": -11.38,
        "yaw": -2.09
       }
      ],
      "id": "overlay_3C4966B7_3261_F26B_41B8_EC713609E23B",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86, this.camera_450B950D_56E6_1987_419E_723D7EB477E7); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.3,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_0_HS_0_0.png",
           "width": 149,
           "height": 149
          }
         ]
        },
        "pitch": -7.36,
        "yaw": 176.56
       }
      ],
      "id": "overlay_3C4956B7_3261_F26B_41C0_AEDFA98A99D6",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 4.67,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_3C4946B7_3261_F26B_41C1_62FD9BB89940",
      "yaw": 176.57
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_33C3D82C_38D2_4871_41C8_2376F9E204C3, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_29391595_38F6_3853_41C9_D966EAC65C17, null, null, null, null, false)",
        "mapColor": "image"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.81,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_0_HS_3_0.png",
           "width": 179,
           "height": 179
          }
         ]
        },
        "pitch": -12.36,
        "yaw": 74.46
       }
      ],
      "id": "overlay_3C4916B7_3261_F26B_41C1_84245DED8341",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "95%",
      "yaw": 74.46,
      "rotationZ": 0,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "id": "popup_33C3D82C_38D2_4871_41C8_2376F9E204C3",
      "hfov": 9.81,
      "rotationX": 0,
      "rotationY": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_33C3D82C_38D2_4871_41C8_2376F9E204C3_0_1.jpg",
         "width": 1024,
         "height": 682
        }
       ]
      },
      "pitch": -12.36,
      "popupDistance": 100,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%"
     }
    ],
    "thumbnailUrl": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_t.jpg",
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_hq.jpeg",
       "width": 12288,
       "height": 2048,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9.jpeg",
       "width": 6144,
       "height": 1024
      }
     ]
    }
   }
  ],
  "mapLocations": [
   {
    "map": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
    "x": 273.35,
    "angle": 0,
    "y": 437.4,
    "class": "PanoramaMapLocation"
   }
  ],
  "thumbnailUrl": "media/panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_t.jpg"
 },
 {
  "label": "Deloitte Costum Spaces",
  "id": "photo_199BC4FA_14F7_6A76_4197_5BBABFBE0553",
  "duration": 5000,
  "width": 4896,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_199BC4FA_14F7_6A76_4197_5BBABFBE0553.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 3672,
  "thumbnailUrl": "media/photo_199BC4FA_14F7_6A76_4197_5BBABFBE0553_t.jpg"
 },
 {
  "label": "Costum Space",
  "id": "album_3491B5B9_38DE_D853_41C6_579068BC6587_0",
  "duration": 5000,
  "width": 1200,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_0.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 800,
  "thumbnailUrl": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_0_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_23C02BF5_393E_CFD3_41C6_5E2E75A5BB3A",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_4419D413_56E6_1F83_41A7_18FF96C03B52",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid44181413_56E6_1F83_41B8_0F9205357932",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7414"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_44195413_56E6_1F83_41C4_DF2681930D4A",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7417"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7416"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_441A8413_56E6_1F83_41D0_977370822954",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2340DDC4_393E_4831_41BB_67E523D40E26_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7418"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_441A9413_56E6_1F83_41B2_62BC154929A4",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2340DDC4_393E_4831_41BB_67E523D40E26_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7419"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7415"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window53905"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_45AEC468_56E6_1F8D_41B0_A3294E34B858",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -111.62,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F",
 {
  "label": "3M Costum Spaces",
  "id": "photo_1D54B742_14BB_D797_416B_33A55D433899",
  "duration": 5000,
  "width": 2300,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1D54B742_14BB_D797_416B_33A55D433899.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 1533,
  "thumbnailUrl": "media/photo_1D54B742_14BB_D797_416B_33A55D433899_t.jpg"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": {
     "buttonCardboardView": {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "IconButton_31952CEF_3D04_5E89_41B0_406DA026A4BE",
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_31952CEF_3D04_5E89_41B0_406DA026A4BE_pressed.png",
      "mode": "push",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "minWidth": 50,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_31952CEF_3D04_5E89_41B0_406DA026A4BE_rollover.png",
      "height": "100%",
      "iconURL": "skin/IconButton_31952CEF_3D04_5E89_41B0_406DA026A4BE.png",
      "propagateClick": false,
      "data": {
       "name": "Button_VR"
      },
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "mouseControlMode": "drag_rotation",
     "class": "PanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "gyroscopeVerticalDraggingEnabled": true,
     "touchControlMode": "drag_rotation",
     "displayPlaybackBar": true
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910', this.Container_290E11E4_3009_0599_41AE_22ED71CAB910.get('visible')); this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6', this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_45EF3422_56E6_1FBD_419C_BC064F8944D1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, false); this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true, -1, this.effect_A79A1953_AA8C_13F9_41E2_5910CF9ECE3D, 'showEffect', false); this.keepComponentVisibility(this.MapViewer, false); this.setComponentVisibility(this.MapViewer, true, -1, this.effect_A7B56BE0_AA9C_76D7_41BA_417818A47231, 'showEffect', false); this.keepComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false); this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false, -1, this.effect_3C93EF2F_3781_EF7E_419D_C765029E0676, 'hideEffect', false)",
    "media": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9",
    "end": "if(this.existsKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6')){ if(this.getKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6')) { this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true, -1, this.effect_A79A1953_AA8C_13F9_41E2_5910CF9ECE3D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, false, -1, this.effect_46B61658_56E6_1B8D_41CA_CC28D8759A13, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_A7B56BE0_AA9C_76D7_41BA_417818A47231, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_46B7C658_56E6_1B8D_41CE_53C0A4BEEFE8, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer'); if(this.existsKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910')){ if(this.getKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910')) { this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, true, -1, this.effect_46B7D658_56E6_1B8D_41D1_6EED62A6A974, 'showEffect', false); } else { this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false, -1, this.effect_3C93EF2F_3781_EF7E_419D_C765029E0676, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910')",
    "start": "this.keepComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true); this.keepComponentVisibility(this.MapViewer, true); this.keepComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45EF3422_56E6_1FBD_419C_BC064F8944D1"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F0A422_56E6_1FBD_41C9_C5E597C75786, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F0A422_56E6_1FBD_41C9_C5E597C75786"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F03422_56E6_1FBD_41C8_607E3273EFCD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F03422_56E6_1FBD_41C8_607E3273EFCD"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F1B422_56E6_1FBD_41D1_986C9D26CD40, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3D4A7011_3260_0E24_4199_1362E5A38227_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0.38,
      "hfov": 110,
      "pitch": -3.43
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F1B422_56E6_1FBD_41D1_986C9D26CD40"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F2B427_56E6_1F83_4183_EBCA8C2D23A4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F2B427_56E6_1F83_4183_EBCA8C2D23A4"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F3C42C_56E6_1F85_41BA_E05031EB03DA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_3F8CB334_3260_326D_41AA_4807852EB634",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3F8CB334_3260_326D_41AA_4807852EB634_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F3C42C_56E6_1F85_41BA_E05031EB03DA"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F3442C_56E6_1F85_41C1_B36A3290059C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F3442C_56E6_1F85_41C1_B36A3290059C"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F4D42C_56E6_1F85_419E_2DD183B3FB54, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F4D42C_56E6_1F85_419E_2DD183B3FB54"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": {
     "thumbnailUrl": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_041",
     "id": "album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_0",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_0.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_0_t.jpg"
        },
        "camera": {
         "class": "PhotoCamera",
         "scaleMode": "fit_inside"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_1_t.jpg"
        },
        "camera": {
         "class": "PhotoCamera",
         "scaleMode": "fit_inside"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_2",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_2.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_2_t.jpg"
        },
        "camera": {
         "class": "PhotoCamera",
         "scaleMode": "fit_inside"
        }
       }
      ],
      "id": "album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_AlbumPlayList"
     }
    },
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPhotoAlbumPlayer"
    }
   }
  ],
  "id": "playList_45EDE422_56E6_1FBD_41C8_EE4F8656BD40"
 },
 {
  "label": "3M Costum Spaces",
  "id": "photo_1C4B0EBF_14BB_F6ED_41AC_D781ABBBAD70",
  "duration": 5000,
  "width": 2300,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1C4B0EBF_14BB_F6ED_41AC_D781ABBBAD70.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 1533,
  "thumbnailUrl": "media/photo_1C4B0EBF_14BB_F6ED_41AC_D781ABBBAD70_t.jpg"
 },
 {
  "label": "3M Costum Spaces",
  "id": "photo_1C4B5413_14BB_E9B5_41B2_C82F0FBCDCE5",
  "duration": 5000,
  "width": 2300,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1C4B5413_14BB_E9B5_41B2_C82F0FBCDCE5.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 1533,
  "thumbnailUrl": "media/photo_1C4B5413_14BB_E9B5_41B2_C82F0FBCDCE5_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_455E64E8_56E6_188D_41BD_2EAF833419D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -57.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "label": "Video Tour Secuencia_1",
  "scaleMode": "fit_inside",
  "width": 1280,
  "loop": false,
  "id": "video_BDB8E3BB_B073_6C81_41D0_3B3EFC331417",
  "class": "Video",
  "height": 720,
  "thumbnailUrl": "media/video_BDB8E3BB_B073_6C81_41D0_3B3EFC331417_t.jpg",
  "video": {
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_BDB8E3BB_B073_6C81_41D0_3B3EFC331417.mp4",
   "height": 720
  }
 },
 {
  "thumbnailUrl": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_t.png",
  "class": "PhotoAlbum",
  "label": "Photo Album DHL_Cafetal_ALTA_001",
  "id": "album_2EB9C9C2_38D2_C831_4187_58DA0388AF33",
  "playList": {
   "class": "PhotoPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "label": "Front Building E",
      "id": "album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_0",
      "duration": 5000,
      "width": 1200,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_0.jpg"
        }
       ]
      },
      "class": "Photo",
      "height": 800,
      "thumbnailUrl": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_0_t.jpg"
     },
     "camera": {
      "duration": 5000,
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.45",
       "y": "0.30",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "label": "Perspective Building E",
      "id": "album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_1",
      "duration": 5000,
      "width": 1200,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_1.jpg"
        }
       ]
      },
      "class": "Photo",
      "height": 800,
      "thumbnailUrl": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_1_t.jpg"
     },
     "camera": {
      "duration": 5000,
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.33",
       "y": "0.30",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "label": "Perspective Building E",
      "id": "album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_2",
      "duration": 5000,
      "width": 1200,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_2.jpg"
        }
       ]
      },
      "class": "Photo",
      "height": 800,
      "thumbnailUrl": "media/album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_2_t.jpg"
     },
     "camera": {
      "duration": 5000,
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.67",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     }
    }
   ],
   "id": "album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_AlbumPlayList"
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": {
     "thumbnailUrl": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_084",
     "id": "album_20D115DE_3932_5BD1_41B5_18856C8EC0EC",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Conference Room",
         "id": "album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_0",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_0.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_0_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.33",
          "y": "0.48",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Conference Room",
         "id": "album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.27",
          "y": "0.37",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Conference Room",
         "id": "album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_2",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_2.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_2_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.51",
          "y": "0.74",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_AlbumPlayList"
     }
    },
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45EEC422_56E6_1FBD_41D1_1599639165B0"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42AE5563_56E6_1983_41A7_41B45E28E975",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.23,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": {
     "thumbnailUrl": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_039",
     "id": "album_34E6BCC5_38D2_4833_41CB_F5D6120D1588",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_0",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_0.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_0_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.47",
          "y": "0.69",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.59",
          "y": "0.34",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_2",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_2.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_2_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.30",
          "y": "0.60",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_AlbumPlayList"
     }
    },
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45ED9422_56E6_1FBD_41C0_4F237F420CC7"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_33C3D82C_38D2_4871_41C8_2376F9E204C3_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_33C3D82C_38D2_4871_41C8_2376F9E204C3_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_33C3D82C_38D2_4871_41C8_2376F9E204C3_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_29391595_38F6_3853_41C9_D966EAC65C17"
 },
 {
  "class": "SlideOutEffect",
  "to": "right",
  "id": "effect_3CB3D41D_3064_C97C_41A1_52355E7B9243",
  "duration": 3000,
  "easing": "linear"
 },
 "this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227",
 {
  "label": "3M Costum Spaces",
  "id": "photo_1C4B3B5C_14BB_FFB3_418E_81E054613EB1",
  "duration": 5000,
  "width": 2300,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1C4B3B5C_14BB_FFB3_418E_81E054613EB1.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 1533,
  "thumbnailUrl": "media/photo_1C4B3B5C_14BB_FFB3_418E_81E054613EB1_t.jpg"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_46B7A65A_56E6_1B8D_41D1_9E28CC0498F8",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_454174CC_56E6_1885_4195_3015723E99CD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.1,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_440D3408_56E6_1F8D_41CE_8628D6F4DDF1, [this.htmltext_440E8408_56E6_1F8D_41CD_BEF66B9BF49F,this.component_440FE408_56E6_1F8D_41CF_5F27EB5289D7,this.component_440F8408_56E6_1F8D_41D0_A075BFA2E749], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_0276D841_0C26_DC61_41A0_FF660A697938_AlbumPlayList, this.htmltext_440E8408_56E6_1F8D_41CD_BEF66B9BF49F, this.albumitem_5897DE5E_56DA_2B85_41D1_72F2E2B8044E); this.loopAlbum(this.playList_58931E5E_56DA_2B85_41A2_2AF185E3B836, 0)",
    "media": {
     "thumbnailUrl": "media/album_0276D841_0C26_DC61_41A0_FF660A697938_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album pic",
     "id": "album_0276D841_0C26_DC61_41A0_FF660A697938",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": "this.photo_1D54B742_14BB_D797_416B_33A55D433899",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.66",
          "y": "0.38",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B8965_14BB_DB9D_41A7_6ACB1BE82BB7",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B8965_14BB_DB9D_41A7_6ACB1BE82BB7.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B8965_14BB_DB9D_41A7_6ACB1BE82BB7_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.37",
          "y": "0.35",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B6B26_14BB_DF9F_41B1_96FAE7B9E45E",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B6B26_14BB_DF9F_41B1_96FAE7B9E45E.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B6B26_14BB_DF9F_41B1_96FAE7B9E45E_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.44",
          "y": "0.60",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B6CE9_14BB_DA92_4197_57B1A08D5F1B",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B6CE9_14BB_DA92_4197_57B1A08D5F1B.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B6CE9_14BB_DA92_4197_57B1A08D5F1B_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.65",
          "y": "0.70",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B6ECE_14BB_D6AE_41AA_44732BE66949",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B6ECE_14BB_D6AE_41AA_44732BE66949.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B6ECE_14BB_D6AE_41AA_44732BE66949_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.61",
          "y": "0.35",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B209F_14BB_EAAD_419A_E4E72E50AD69",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B209F_14BB_EAAD_419A_E4E72E50AD69.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B209F_14BB_EAAD_419A_E4E72E50AD69_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.63",
          "y": "0.59",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B2260_14BB_E993_4165_9EFC9DCB09E8",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B2260_14BB_E993_4165_9EFC9DCB09E8.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B2260_14BB_E993_4165_9EFC9DCB09E8_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.66",
          "y": "0.53",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.photo_1C4B5413_14BB_E9B5_41B2_C82F0FBCDCE5",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.41",
          "y": "0.38",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B35C4_14BB_EA93_41B4_0966FDED2464",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B35C4_14BB_EA93_41B4_0966FDED2464.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B35C4_14BB_EA93_41B4_0966FDED2464_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.41",
          "y": "0.68",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B2798_14BB_F6B2_4191_6DC8C083D27B",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B2798_14BB_F6B2_4191_6DC8C083D27B.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B2798_14BB_F6B2_4191_6DC8C083D27B_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.32",
          "y": "0.42",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B3969_14BB_FB95_41B3_33A419479576",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B3969_14BB_FB95_41B3_33A419479576.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B3969_14BB_FB95_41B3_33A419479576_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.49",
          "y": "0.51",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.photo_1C4B3B5C_14BB_FFB3_418E_81E054613EB1",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.30",
          "y": "0.27",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "3M Costum Spaces",
         "id": "photo_1C4B0D1E_14BB_FBAF_41A6_169F9AC5885B",
         "duration": 5000,
         "width": 2300,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_1C4B0D1E_14BB_FBAF_41A6_169F9AC5885B.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 1533,
         "thumbnailUrl": "media/photo_1C4B0D1E_14BB_FBAF_41A6_169F9AC5885B_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.66",
          "y": "0.37",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.photo_1C4B0EBF_14BB_F6ED_41AC_D781ABBBAD70",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.38",
          "y": "0.36",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Deloitte Costum Spaces",
         "id": "photo_196D15E6_14F7_2A9F_41AC_462583A746B5",
         "duration": 5000,
         "width": 4896,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_196D15E6_14F7_2A9F_41AC_462583A746B5.JPG"
           }
          ]
         },
         "class": "Photo",
         "height": 3672,
         "thumbnailUrl": "media/photo_196D15E6_14F7_2A9F_41AC_462583A746B5_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.44",
          "y": "0.32",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Deloitte Costum Spaces",
         "id": "photo_19980D86_14F7_5A9F_418C_14164C7751C0",
         "duration": 5000,
         "width": 4896,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_19980D86_14F7_5A9F_418C_14164C7751C0.JPG"
           }
          ]
         },
         "class": "Photo",
         "height": 3672,
         "thumbnailUrl": "media/photo_19980D86_14F7_5A9F_418C_14164C7751C0_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.61",
          "y": "0.42",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.photo_199BC4FA_14F7_6A76_4197_5BBABFBE0553",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.72",
          "y": "0.57",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Deloitte Costum Spaces",
         "id": "photo_199BDC3E_14F7_79EF_4196_7CD986D9789F",
         "duration": 5000,
         "width": 4896,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_199BDC3E_14F7_79EF_4196_7CD986D9789F.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 3672,
         "thumbnailUrl": "media/photo_199BDC3E_14F7_79EF_4196_7CD986D9789F_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.35",
          "y": "0.54",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Citi Costum Spaces",
         "id": "photo_199BD398_14F7_6EB3_4191_9F2D889C462F",
         "duration": 5000,
         "width": 1280,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_199BD398_14F7_6EB3_4191_9F2D889C462F.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 960,
         "thumbnailUrl": "media/photo_199BD398_14F7_6EB3_4191_9F2D889C462F_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.30",
          "y": "0.58",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Citi Costum Spaces",
         "id": "photo_199BC4D6_14F7_6ABE_41AF_784C863DFFCE",
         "duration": 5000,
         "width": 1280,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_199BC4D6_14F7_6ABE_41AF_784C863DFFCE.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 960,
         "thumbnailUrl": "media/photo_199BC4D6_14F7_6ABE_41AF_784C863DFFCE_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.32",
          "y": "0.61",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Citi Costum Spaces",
         "id": "photo_199BD613_14F7_69B5_4199_E6C27210A6A9",
         "duration": 5000,
         "width": 1280,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_199BD613_14F7_69B5_4199_E6C27210A6A9.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 960,
         "thumbnailUrl": "media/photo_199BD613_14F7_69B5_4199_E6C27210A6A9_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.61",
          "y": "0.65",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Lobby Detail",
         "id": "photo_31B5FBF6_38CF_CFD1_419A_2ADFF3F5351A",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_31B5FBF6_38CF_CFD1_419A_2ADFF3F5351A.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/photo_31B5FBF6_38CF_CFD1_419A_2ADFF3F5351A_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.70",
          "y": "0.32",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Elevators Wall Detail",
         "id": "photo_31B40D00_38CF_C831_41C8_C2EC831ADBE1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_31B40D00_38CF_C831_41C8_C2EC831ADBE1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/photo_31B40D00_38CF_C831_41C8_C2EC831ADBE1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.71",
          "y": "0.57",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Restrooms",
         "id": "photo_31B5FE0B_38CF_C837_41A5_8369C00490D3",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_31B5FE0B_38CF_C837_41A5_8369C00490D3.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/photo_31B5FE0B_38CF_C837_41A5_8369C00490D3_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.59",
          "y": "0.52",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Meeting Room",
         "id": "photo_34474053_38D2_F8D0_4193_925B5758CEDF",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/photo_34474053_38D2_F8D0_4193_925B5758CEDF.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/photo_34474053_38D2_F8D0_4193_925B5758CEDF_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.64",
          "y": "0.41",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_0276D841_0C26_DC61_41A0_FF660A697938_AlbumPlayList"
     }
    },
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid440D0408_56E6_1F8D_4177_F3EA8291AC6E",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7384"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid58923E5E_56DA_2B85_4183_707E72388D94PhotoAlbumPlayer"
    },
    "id": "albumitem_5897DE5E_56DA_2B85_41D1_72F2E2B8044E"
   }
  ],
  "id": "playList_58931E5E_56DA_2B85_41A2_2AF185E3B836"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_457394C2_56E6_1882_41BE_F7831DD8D03C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.05,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8",
 "this.photo_1C4B6B26_14BB_DF9F_41B1_96FAE7B9E45E",
 "this.popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33",
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45ED4422_56E6_1FBD_41AF_3AA14C086B42"
 },
 "this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_1",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_BDB8E3BB_B073_6C81_41D0_3B3EFC331417",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_45EE0422_56E6_1FBD_41BC_42D37A2E241C, 0, '#000000')",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerVideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_45EE0422_56E6_1FBD_41BC_42D37A2E241C"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3C93EF2F_3781_EF7E_419D_C765029E0676",
  "duration": 3000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_F6324F9A_FAD3_3D49_41D1_FA9EE9BB0378",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_455094DE_56E6_1885_41CB_97A05566ED59",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.91,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.photo_199BDC3E_14F7_79EF_4196_7CD986D9789F",
 {
  "label": "Dinner room",
  "id": "album_2340DDC4_393E_4831_41BB_67E523D40E26_0",
  "duration": 5000,
  "width": 1200,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_0.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 800,
  "thumbnailUrl": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_0_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42E6A526_56E6_1985_41C2_125AB36E2D86",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.48,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_33C3D82C_38D2_4871_41C8_2376F9E204C3",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45FC0431_56E6_1F9F_41D4_6048F8E3B547, this.MapViewerMapPlayer)",
    "media": "this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45FC0431_56E6_1F9F_41D4_6048F8E3B547"
   }
  ],
  "id": "playList_45E0B418_56E6_1F8D_41D2_9299B3E551D7"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_A7B56BE0_AA9C_76D7_41BA_417818A47231",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_45BBD47C_56E6_1F85_41A4_151E5FD3FD08",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 78.56,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_422165C7_56E6_1883_418B_A35D0154DAF3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.55,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "label": "Kitchen ",
  "id": "album_22792834_393E_C851_41B7_E4EC96DFD835_1",
  "duration": 5000,
  "width": 1200,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_1.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 800,
  "thumbnailUrl": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_1_t.jpg"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 0, 1)",
    "media": "this.panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86",
    "camera": "this.panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910', this.Container_290E11E4_3009_0599_41AE_22ED71CAB910.get('visible')); this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6', this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6.get('visible')); this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 1, 2); this.keepComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, false); this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true, -1, this.effect_A79A1953_AA8C_13F9_41E2_5910CF9ECE3D, 'showEffect', false); this.keepComponentVisibility(this.MapViewer, false); this.setComponentVisibility(this.MapViewer, true, -1, this.effect_A7B56BE0_AA9C_76D7_41BA_417818A47231, 'showEffect', false); this.keepComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false); this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false, -1, this.effect_3C93EF2F_3781_EF7E_419D_C765029E0676, 'hideEffect', false)",
    "media": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9",
    "end": "if(this.existsKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6')){ if(this.getKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6')) { this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true, -1, this.effect_A79A1953_AA8C_13F9_41E2_5910CF9ECE3D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, false, -1, this.effect_46B7965A_56E6_1B8D_41C4_38ABABEF7B97, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_A7B56BE0_AA9C_76D7_41BA_417818A47231, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_46B7A65A_56E6_1B8D_41D1_9E28CC0498F8, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer'); if(this.existsKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910')){ if(this.getKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910')) { this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, true, -1, this.effect_46B7B65A_56E6_1B8D_4189_38DCE7145F61, 'showEffect', false); } else { this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false, -1, this.effect_3C93EF2F_3781_EF7E_419D_C765029E0676, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_290E11E4_3009_0599_41AE_22ED71CAB910')",
    "start": "this.keepComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true); this.keepComponentVisibility(this.MapViewer, true); this.keepComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, true)",
    "camera": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 2, 3)",
    "media": "this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01",
    "camera": "this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 3, 4)",
    "media": "this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6",
    "camera": "this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 4, 5)",
    "media": "this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227",
    "camera": "this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 5, 6)",
    "media": "this.panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B",
    "camera": "this.panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 6, 7)",
    "media": "this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8",
    "camera": "this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 7, 8)",
    "media": "this.panorama_3F8CB334_3260_326D_41AA_4807852EB634",
    "camera": "this.panorama_3F8CB334_3260_326D_41AA_4807852EB634_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 8, 9)",
    "media": "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55",
    "camera": "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist, 9, 0)",
    "media": "this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17",
    "camera": "this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist"
 },
 {
  "change": "this.showComponentsWhileMouseOver(this.container_4419D413_56E6_1F83_41A7_18FF96C03B52, [this.htmltext_44195413_56E6_1F83_41C4_DF2681930D4A,this.component_441A8413_56E6_1F83_41D0_977370822954,this.component_441A9413_56E6_1F83_41B2_62BC154929A4], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_2340DDC4_393E_4831_41BB_67E523D40E26_AlbumPlayList, this.htmltext_44195413_56E6_1F83_41C4_DF2681930D4A, this.albumitem_588A0E68_56DA_2B8D_41C9_2D37FE2C7907); this.loopAlbum(this.playList_588A5E68_56DA_2B8D_41CE_9B5514C0B165, 0)",
    "media": {
     "thumbnailUrl": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_076",
     "id": "album_2340DDC4_393E_4831_41BB_67E523D40E26",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": "this.album_2340DDC4_393E_4831_41BB_67E523D40E26_0",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.36",
          "y": "0.30",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Dinner room",
         "id": "album_2340DDC4_393E_4831_41BB_67E523D40E26_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.54",
          "y": "0.46",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Dinner room",
         "id": "album_2340DDC4_393E_4831_41BB_67E523D40E26_2",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_2.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2340DDC4_393E_4831_41BB_67E523D40E26_2_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.25",
          "y": "0.34",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_2340DDC4_393E_4831_41BB_67E523D40E26_AlbumPlayList"
     }
    },
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": "this.viewer_uid44181413_56E6_1F83_41B8_0F9205357932",
     "id": "viewer_uid588A7E68_56DA_2B8D_41C3_468C59FA93ECPhotoAlbumPlayer"
    },
    "id": "albumitem_588A0E68_56DA_2B8D_41C9_2D37FE2C7907"
   }
  ],
  "id": "playList_588A5E68_56DA_2B8D_41CE_9B5514C0B165"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42F41530_56E6_199D_41BC_A79C5BF6753F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86_camera",
 "this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_46AFA648_56E6_1B8D_4176_1CB381D74BE3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.28,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_22AF612D_32A0_0E7F_41C9_1DA71AC59E9F_camera",
 {
  "label": "Wall Detail",
  "id": "album_2736F94F_3933_C8CF_41C4_12631C85E218_2",
  "duration": 5000,
  "width": 1200,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_2.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 800,
  "thumbnailUrl": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_2_t.jpg"
 },
 "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": {
     "thumbnailUrl": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_025",
     "id": "album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Meeting Room",
         "id": "album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_0",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_0.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_0_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.52",
          "y": "0.42",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Meeting Room",
         "id": "album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.74",
          "y": "0.43",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Meeting Room",
         "id": "album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_2",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_2.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_2_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.68",
          "y": "0.51",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_AlbumPlayList"
     }
    },
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45ED7422_56E6_1FBD_418B_740D66C0F70E"
 },
 "this.photo_1C4B6ECE_14BB_D6AE_41AA_44732BE66949",
 "this.panorama_3F8CB334_3260_326D_41AA_4807852EB634_camera",
 "this.photo_1C4B209F_14BB_EAAD_419A_E4E72E50AD69",
 "this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_46A8363E_56E6_1B82_41D3_3FFFA1AD2D60",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.13,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_24A9CA74_3932_48D1_41BB_F3E9E8CECEC3",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_45E83422_56E6_1FBD_41BE_279F7CAE6DAC",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid45E87422_56E6_1FBD_41D4_2DAD365251BF",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7426"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_45E71422_56E6_1FBD_41D3_D3F60D466FB8",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7429"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7428"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_45E87422_56E6_1FBD_41D1_639BE56B033B",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2736F94F_3933_C8CF_41C4_12631C85E218_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7430"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_45E80422_56E6_1FBD_41B9_C3B716B29B4F",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2736F94F_3933_C8CF_41C4_12631C85E218_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7431"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7427"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window61915"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_46B53657_56E6_1B83_4162_259D1F22D653",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.33,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": {
     "thumbnailUrl": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_081",
     "id": "album_22792834_393E_C851_41B7_E4EC96DFD835",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Kitchen ",
         "id": "album_22792834_393E_C851_41B7_E4EC96DFD835_0",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_0.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_0_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.64",
          "y": "0.75",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.album_22792834_393E_C851_41B7_E4EC96DFD835_1",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.29",
          "y": "0.51",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Kitchen ",
         "id": "album_22792834_393E_C851_41B7_E4EC96DFD835_2",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_2.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_22792834_393E_C851_41B7_E4EC96DFD835_2_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.74",
          "y": "0.74",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_22792834_393E_C851_41B7_E4EC96DFD835_AlbumPlayList"
     }
    },
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45EE9422_56E6_1FBD_41C5_1FC1430BC19A"
 },
 "this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_0",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
    "player": {
     "class": "MapPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": 14,
      "toolTipBackgroundColor": "transparent",
      "id": "MapViewer",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 0,
      "playbackBarHeadBorderColor": "#000000",
      "width": 348,
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 259,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "height": 412,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "minWidth": 200,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "progressLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 0,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#FFFFFF",
      "toolTipPaddingLeft": 0,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 50,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 50,
      "paddingTop": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "MapViewer"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained"
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_45EC4422_56E6_1FBD_41C5_F542855BC1D4"
 },
 "this.panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B_camera",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_4416140D_56E6_1F87_41C1_13A76503E840, [this.htmltext_4417E40D_56E6_1F87_41D0_A52F30C95DB4,this.component_4418C413_56E6_1F83_4192_57CEB36DC61C,this.component_4418E413_56E6_1F83_4173_1A2910A7FC44], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_22792834_393E_C851_41B7_E4EC96DFD835_AlbumPlayList, this.htmltext_4417E40D_56E6_1F87_41D0_A52F30C95DB4, this.albumitem_5889EE68_56DA_2B8D_41C7_E1148E4EFFE1); this.loopAlbum(this.playList_588A1E68_56DA_2B8D_41C5_E8B312A5D661, 0)",
    "media": "this.album_22792834_393E_C851_41B7_E4EC96DFD835",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid4416B40D_56E6_1F87_41A9_BA202767BF3B",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7408"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid5889CE68_56DA_2B8D_41C5_AD8A0A7C8207PhotoAlbumPlayer"
    },
    "id": "albumitem_5889EE68_56DA_2B8D_41C7_E1148E4EFFE1"
   }
  ],
  "id": "playList_588A1E68_56DA_2B8D_41C5_E8B312A5D661"
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_192A635A_14CB_2FB7_41AB_E93F3FDFF371",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "bodyBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "footerBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_440D3408_56E6_1F8D_41CE_8628D6F4DDF1",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid440D0408_56E6_1F8D_4177_F3EA8291AC6E",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_440E8408_56E6_1F8D_41CD_BEF66B9BF49F",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7387"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7386"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_440FE408_56E6_1F8D_41CF_5F27EB5289D7",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_0276D841_0C26_DC61_41A0_FF660A697938_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7388"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_440F8408_56E6_1F8D_41D0_A075BFA2E749",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_0276D841_0C26_DC61_41A0_FF660A697938_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7389"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7385"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBorderColor": "#000000",
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "closeButtonRollOverBorderSize": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "closeButtonRollOverBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverIconLineWidth": 1,
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "footerBorderColor": "#000000",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window12176"
  },
  "bodyBorderSize": 0,
  "closeButtonPressedBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 "this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_1",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_46A33634_56E6_1B86_41D0_9795E7467246",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.72,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.album_2340DDC4_393E_4831_41BB_67E523D40E26_2",
 "this.panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_4415540C_56E6_1F85_41D4_E96955D29246, [this.htmltext_4415340C_56E6_1F85_41C9_7CB2A3717AC5,this.component_4416140D_56E6_1F87_41D1_5ADA397728AA,this.component_4416240D_56E6_1F87_41CF_FD612ACEC332], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_AlbumPlayList, this.htmltext_4415340C_56E6_1F85_41C9_7CB2A3717AC5, this.albumitem_588B5E5E_56DA_2B85_41C7_D5173A1C5B29); this.loopAlbum(this.playList_588BAE5E_56DA_2B85_41A5_AF60866DB5DA, 0)",
    "media": "this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid4415940C_56E6_1F85_41D1_B51718D4AB2B",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7402"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid588B4E5E_56DA_2B85_41D4_3F83786EBAC3PhotoAlbumPlayer"
    },
    "id": "albumitem_588B5E5E_56DA_2B85_41C7_D5173A1C5B29"
   }
  ],
  "id": "playList_588BAE5E_56DA_2B85_41A5_AF60866DB5DA"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F9E42C_56E6_1F85_41B5_9AC2A2CE30C5, this.MapViewerMapPlayer)",
    "media": "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F9E42C_56E6_1F85_41B5_9AC2A2CE30C5"
   }
  ],
  "id": "playList_440BC3FF_56E6_1883_41C4_B9DD924E020E"
 },
 "this.photo_1C4B0D1E_14BB_FBAF_41A6_169F9AC5885B",
 "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_45A3A459_56E6_1F8F_41C3_CD4B6FF2F1F3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.44,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_45ECF422_56E6_1FBD_41C0_2C5C708B2F1D"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42D1754E_56E6_1985_41CD_F6A2FCCA7EE4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.69,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_5D6B09DB_5231_DC90_41B1_4DDB6F3CBA86",
 "this.photo_199BC4D6_14F7_6ABE_41AF_784C863DFFCE",
 "this.photo_196D15E6_14F7_2A9F_41AC_462583A746B5",
 "this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_45197519_56E6_198E_41A2_D6220669D799",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.MainViewerPhotoAlbumPlayer",
 "this.panorama_3D9E91A2_3260_0E65_41B9_D13E74E9C6A8_camera",
 "this.panorama_3FD4E575_3260_16EC_41C0_1652A208BA4B",
 "this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_0",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_45E83422_56E6_1FBD_41BE_279F7CAE6DAC, [this.htmltext_45E71422_56E6_1FBD_41D3_D3F60D466FB8,this.component_45E87422_56E6_1FBD_41D1_639BE56B033B,this.component_45E80422_56E6_1FBD_41B9_C3B716B29B4F], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_2736F94F_3933_C8CF_41C4_12631C85E218_AlbumPlayList, this.htmltext_45E71422_56E6_1FBD_41D3_D3F60D466FB8, this.albumitem_58835E72_56DA_2B9D_41D2_FEF1DA070292); this.loopAlbum(this.playList_58838E72_56DA_2B9D_41CD_64BFCB0D8888, 0)",
    "media": {
     "thumbnailUrl": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_018",
     "id": "album_2736F94F_3933_C8CF_41C4_12631C85E218",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Offices",
         "id": "album_2736F94F_3933_C8CF_41C4_12631C85E218_0",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_0.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_0_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.35",
          "y": "0.25",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Offices",
         "id": "album_2736F94F_3933_C8CF_41C4_12631C85E218_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_2736F94F_3933_C8CF_41C4_12631C85E218_1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.54",
          "y": "0.30",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.album_2736F94F_3933_C8CF_41C4_12631C85E218_2",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.35",
          "y": "0.71",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_2736F94F_3933_C8CF_41C4_12631C85E218_AlbumPlayList"
     }
    },
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": "this.viewer_uid45E87422_56E6_1FBD_41D4_2DAD365251BF",
     "id": "viewer_uid5883BE72_56DA_2B9D_41BC_B474DE38FF5BPhotoAlbumPlayer"
    },
    "id": "albumitem_58835E72_56DA_2B9D_41D2_FEF1DA070292"
   }
  ],
  "id": "playList_58838E72_56DA_2B9D_41CD_64BFCB0D8888"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_46B7D658_56E6_1B8D_41D1_6EED62A6A974",
  "duration": 3000,
  "easing": "cubic_in_out"
 },
 "this.panorama_3FEA5D7D_3260_16DC_41B5_1D1793D23A55_camera",
 "this.photo_1C4B2260_14BB_E993_4165_9EFC9DCB09E8",
 "this.photo_34474053_38D2_F8D0_4193_925B5758CEDF",
 "this.MainViewerPanoramaPlayer",
 "this.popup_37C7D72D_38CE_5873_41BE_872E844D4277",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_360CFD78_38CE_C8D1_41BE_2D6FD8DACCE0_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_29371590_38F6_3851_41C5_E2D568ADBABA"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_46B7965A_56E6_1B8D_41C4_38ABABEF7B97",
  "duration": 2000,
  "easing": "cubic_in_out"
 },
 "this.panorama_3F29697F_32A0_3EDC_41B7_99BAD5F39C17",
 {
  "label": "Costum Space",
  "id": "album_3491B5B9_38DE_D853_41C6_579068BC6587_2",
  "duration": 5000,
  "width": 1200,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_2.jpg"
    }
   ]
  },
  "class": "Photo",
  "height": 800,
  "thumbnailUrl": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_2_t.jpg"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36080B6A_38CE_48F1_41A5_D451E17701EC_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36080B6A_38CE_48F1_41A5_D451E17701EC_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36080B6A_38CE_48F1_41A5_D451E17701EC_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_2935F591_38F6_3853_41B5_258F93608698"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_4253D5BC_56E6_1885_41C6_050542901987",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.39,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_1",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_452DF4F4_56E6_1886_41AB_3867A5C15009",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.45,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42683596_56E6_1885_4193_9B76B20051D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 63.42,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.photo_1C4B35C4_14BB_EA93_41B4_0966FDED2464",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_4412E40B_56E6_1F83_41B4_9BF6D7A45674, [this.htmltext_4412540B_56E6_1F83_41D3_4A605CFC0F37,this.component_4413940B_56E6_1F83_41D4_84CDC67F2552,this.component_4413A40B_56E6_1F83_41D5_2E69B51FACD6], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_AlbumPlayList, this.htmltext_4412540B_56E6_1F83_41D3_4A605CFC0F37, this.albumitem_58950E5E_56DA_2B85_41D0_0CB95AF9A89D); this.loopAlbum(this.playList_58955E5E_56DA_2B85_41C3_8BE5E1C4C5AE, 0)",
    "media": "this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid4412C40A_56E6_1F8D_41D0_93AC81EA3C6A",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7396"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid58957E5E_56DA_2B85_41D3_46BE0232DFC8PhotoAlbumPlayer"
    },
    "id": "albumitem_58950E5E_56DA_2B85_41D0_0CB95AF9A89D"
   }
  ],
  "id": "playList_58955E5E_56DA_2B85_41C3_8BE5E1C4C5AE"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_4230E5D3_56E6_1882_419F_DBA39A0E4491",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.97,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_0276D841_0C26_DC61_41A0_FF660A697938",
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45EC7422_56E6_1FBD_41BC_93A14CDA4104"
 },
 {
  "change": "this.showComponentsWhileMouseOver(this.container_440743FF_56E6_1883_41D1_93CB8EFAB7FB, [this.htmltext_4408C3FF_56E6_1883_41D2_9410DFC50140,this.component_440813FF_56E6_1883_41B2_1C0F766B9B42,this.component_440823FF_56E6_1883_41C0_345A61C01EBA], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_AlbumPlayList, this.htmltext_4408C3FF_56E6_1883_41D2_9410DFC50140, this.albumitem_46AC118C_56DA_3885_41C4_4A02C19BDA9D); this.loopAlbum(this.playList_46AC518C_56DA_3885_41B4_FF90BD2CFBA5, 0)",
    "media": "this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid4407E3FF_56E6_1883_419B_3313678F8AED",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7378"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid46AC618C_56DA_3885_41BB_2C44DE16F309PhotoAlbumPlayer"
    },
    "id": "albumitem_46AC118C_56DA_3885_41C4_4A02C19BDA9D"
   }
  ],
  "id": "playList_46AC518C_56DA_3885_41B4_FF90BD2CFBA5"
 },
 "this.album_2736F94F_3933_C8CF_41C4_12631C85E218",
 "this.album_22792834_393E_C851_41B7_E4EC96DFD835_0",
 "this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_1",
 "this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_4589448B_56E6_1883_41C4_27662404F3B4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.17,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B",
 "this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_2",
 "this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_2736F94F_3933_C8CF_41C4_12631C85E218",
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45EE4422_56E6_1FBD_41A3_642F497EA68D"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_429A958C_56E6_1885_41D0_13BBF7D1CDD5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 54.3,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.photo_1C4B2798_14BB_F6B2_4191_6DC8C083D27B",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_46B61658_56E6_1B8D_41CA_CC28D8759A13",
  "duration": 2000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F8042C_56E6_1F85_41BD_6867FC48725A, this.MapViewerMapPlayer)",
    "media": "this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6",
    "camera": "this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F8042C_56E6_1F85_41BD_6867FC48725A"
   }
  ],
  "id": "playList_440953FF_56E6_1883_41C6_3E241D3AFF7C"
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_20A39569_3933_D8F3_418F_93DCBE108601",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_4415540C_56E6_1F85_41D4_E96955D29246",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid4415940C_56E6_1F85_41D1_B51718D4AB2B",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_4415340C_56E6_1F85_41C9_7CB2A3717AC5",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7405"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7404"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_4416140D_56E6_1F87_41D1_5ADA397728AA",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7406"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_4416240D_56E6_1F87_41CF_FD612ACEC332",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7407"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7403"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window48737"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 "this.album_2736F94F_3933_C8CF_41C4_12631C85E218_1",
 "this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_0",
 "this.MainViewerVideoPlayer",
 {
  "class": "FadeOutEffect",
  "id": "effect_2BD11C34_3D4F_CF28_41C4_1043D4630055",
  "duration": 300,
  "easing": "linear"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_46B7C658_56E6_1B8D_41CE_53C0A4BEEFE8",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.album_22792834_393E_C851_41B7_E4EC96DFD835_2",
 "this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_0",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": {
     "thumbnailUrl": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_t.png",
     "class": "PhotoAlbum",
     "label": "Photo Album DHL_Cafetal_ALTA_092",
     "id": "album_3491B5B9_38DE_D853_41C6_579068BC6587",
     "playList": {
      "class": "PhotoPlayList",
      "items": [
       {
        "class": "PhotoPlayListItem",
        "media": "this.album_3491B5B9_38DE_D853_41C6_579068BC6587_0",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.33",
          "y": "0.39",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": {
         "label": "Costum Space",
         "id": "album_3491B5B9_38DE_D853_41C6_579068BC6587_1",
         "duration": 5000,
         "width": 1200,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_1.jpg"
           }
          ]
         },
         "class": "Photo",
         "height": 800,
         "thumbnailUrl": "media/album_3491B5B9_38DE_D853_41C6_579068BC6587_1_t.jpg"
        },
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.46",
          "y": "0.43",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       },
       {
        "class": "PhotoPlayListItem",
        "media": "this.album_3491B5B9_38DE_D853_41C6_579068BC6587_2",
        "camera": {
         "duration": 5000,
         "targetPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.61",
          "y": "0.54",
          "zoomFactor": 1.1
         },
         "class": "MovementPhotoCamera",
         "scaleMode": "fit_outside",
         "initialPosition": {
          "class": "PhotoCameraPosition",
          "x": "0.50",
          "y": "0.50",
          "zoomFactor": 1
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_3491B5B9_38DE_D853_41C6_579068BC6587_AlbumPlayList"
     }
    },
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45EC3422_56E6_1FBD_41CA_F4237A236043"
 },
 "this.album_2340DDC4_393E_4831_41BB_67E523D40E26",
 "this.photo_31B5FE0B_38CF_C837_41A5_8369C00490D3",
 "this.photo_1C4B8965_14BB_DB9D_41A7_6ACB1BE82BB7",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_450B950D_56E6_1987_419E_723D7EB477E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.93,
   "pitch": 0
  }
 },
 "this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_1",
 "this.album_0276D841_0C26_DC61_41A0_FF660A697938",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42C3953A_56E6_198D_41CD_C964F3CE92FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 26.26,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_453B54FE_56E6_1885_41C6_1002282F0185",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.34,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.album_22792834_393E_C851_41B7_E4EC96DFD835",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_45E20418_56E6_1F8D_41D1_3603E9948AF8, [this.htmltext_45E3A418_56E6_1F8D_41C3_46F5A54D1636,this.component_45E4F418_56E6_1F8D_41D3_284DB5939143,this.component_45E48418_56E6_1F8D_41C6_60CAE85D26BB], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_AlbumPlayList, this.htmltext_45E3A418_56E6_1F8D_41C3_46F5A54D1636, this.albumitem_588DEE68_56DA_2B8D_41A6_AF0F0E68F4D4); this.loopAlbum(this.playList_588E3E68_56DA_2B8D_41C6_C4FC22ACED13, 0)",
    "media": "this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid45E25418_56E6_1F8D_41C8_28412D156705",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7420"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid588DDE68_56DA_2B8D_41B3_3C777F13D3D1PhotoAlbumPlayer"
    },
    "id": "albumitem_588DEE68_56DA_2B8D_41A6_AF0F0E68F4D4"
   }
  ],
  "id": "playList_588E3E68_56DA_2B8D_41C6_C4FC22ACED13"
 },
 {
  "class": "Panorama",
  "label": "Front_opcion2",
  "id": "panorama_3EAB4FE2_3260_71E4_4181_277B98654863",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9"
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfovMax": 110,
  "hfov": 360,
  "hfovMin": 110,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -6.19,
        "hfov": 6.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3EAB4FE2_3260_71E4_4181_277B98654863_0_HS_1_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -1.54
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.69,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3EAB4FE2_3260_71E4_4181_277B98654863_0_HS_1_0.png",
           "width": 119,
           "height": 119
          }
         ]
        },
        "pitch": -1.54,
        "yaw": -6.19
       }
      ],
      "id": "overlay_2052F2A7_32E0_126C_41AD_162C7A5F5F72",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_3EAB4FE2_3260_71E4_4181_277B98654863_t.jpg",
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3EAB4FE2_3260_71E4_4181_277B98654863_hq.jpeg",
       "width": 12288,
       "height": 2048,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3EAB4FE2_3260_71E4_4181_277B98654863.jpeg",
       "width": 6144,
       "height": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_3EAB4FE2_3260_71E4_4181_277B98654863_t.jpg"
 },
 {
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_53B6709A_421E_58C8_41B6_1C343190B517.mp3",
   "oggUrl": "media/audio_53B6709A_421E_58C8_41B6_1C343190B517.ogg"
  },
  "class": "MediaAudio",
  "id": "audio_53B6709A_421E_58C8_41B6_1C343190B517",
  "autoplay": true,
  "data": {
   "label": "Music HQ_01"
  }
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_37C7D72D_38CE_5873_41BE_872E844D4277_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_37C7D72D_38CE_5873_41BE_872E844D4277_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_37C7D72D_38CE_5873_41BE_872E844D4277_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_2931958C_38F6_3831_41AE_5FEFD9204283"
 },
 "this.photo_199BD613_14F7_69B5_4199_E6C27210A6A9",
 "this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C",
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_2356ABE8_3D7C_C938_41CC_83B459DA9448",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_45E20418_56E6_1F8D_41D1_3603E9948AF8",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid45E25418_56E6_1F8D_41C8_28412D156705",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_45E3A418_56E6_1F8D_41C3_46F5A54D1636",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7423"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7422"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_45E4F418_56E6_1F8D_41D3_284DB5939143",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7424"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_45E48418_56E6_1F8D_41C6_60CAE85D26BB",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7425"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7421"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window14733"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_456694AE_56E6_1885_41D4_C4FC521BED27",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.41,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.album_3491B5B9_38DE_D853_41C6_579068BC6587",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_4598D49E_56E6_1882_41C6_02318220FFD9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.33,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_3D4A7011_3260_0E24_4199_1362E5A38227_camera",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_4410F409_56E6_1F8F_41B7_DEBAEE4CC273, [this.htmltext_44104409_56E6_1F8F_41CB_F9710A274FC3,this.component_44119409_56E6_1F8F_41CA_885B945C97A5,this.component_4411A40A_56E6_1F8D_41D1_0C2C48D19866], 2000)",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.updateMediaLabelFromPlayList(this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_AlbumPlayList, this.htmltext_44104409_56E6_1F8F_41CB_F9710A274FC3, this.albumitem_58961E5E_56DA_2B85_41D2_93B829DD331A); this.loopAlbum(this.playList_5894FE5E_56DA_2B85_41D4_B48C04B2CEF3, 0)",
    "media": "this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid440F2409_56E6_1F8F_41D4_E0FB256F93BC",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea7390"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid58949E5E_56DA_2B85_41B2_4645BAA8414BPhotoAlbumPlayer"
    },
    "id": "albumitem_58961E5E_56DA_2B85_41D2_93B829DD331A"
   }
  ],
  "id": "playList_5894FE5E_56DA_2B85_41D4_B48C04B2CEF3"
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_217EA382_3936_D831_41BC_C966E3E95B02",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_4410F409_56E6_1F8F_41B7_DEBAEE4CC273",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid440F2409_56E6_1F8F_41D4_E0FB256F93BC",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_44104409_56E6_1F8F_41CB_F9710A274FC3",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7393"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7392"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_44119409_56E6_1F8F_41CA_885B945C97A5",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7394"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_4411A40A_56E6_1F8D_41D1_0C2C48D19866",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7395"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7391"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window44991"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 "this.popup_36080B6A_38CE_48F1_41A5_D451E17701EC",
 "this.panorama_3CC36567_3261_F6EC_41C3_F300D6B713F6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_424565AA_56E6_188D_41C1_AF5DBE16F233",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.76,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13",
 "this.album_3491B5B9_38DE_D853_41C6_579068BC6587_1",
 {
  "class": "FadeInEffect",
  "id": "effect_A79A1953_AA8C_13F9_41E2_5910CF9ECE3D",
  "duration": 2000,
  "easing": "cubic_in_out"
 },
 "this.panorama_3DF30457_32E0_162C_419D_514D6CB2EC13_camera",
 "this.map_0D6DCBE7_0AB5_3086_419A_23898788062B",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42BDC56D_56E6_1987_41AA_1429500A936C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.3,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.photo_1C4B3969_14BB_FB95_41B3_33A419479576",
 "this.album_2340DDC4_393E_4831_41BB_67E523D40E26_1",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_428B4580_56E6_197D_41B2_184446BF8E2A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.96,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_25978982_393D_C831_41AE_0C30BC10DA9F",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_4416140D_56E6_1F87_41C1_13A76503E840",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid4416B40D_56E6_1F87_41A9_BA202767BF3B",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_4417E40D_56E6_1F87_41D0_A52F30C95DB4",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7411"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7410"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_4418C413_56E6_1F83_4192_57CEB36DC61C",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_22792834_393E_C851_41B7_E4EC96DFD835_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7412"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_4418E413_56E6_1F83_4173_1A2910A7FC44",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_22792834_393E_C851_41B7_E4EC96DFD835_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7413"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7409"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window58979"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 {
  "class": "SlideInEffect",
  "id": "effect_3CB3C41D_3064_C97C_41BE_B1C63A1EACE3",
  "from": "bottom",
  "duration": 3000,
  "easing": "linear"
 },
 "this.photo_19980D86_14F7_5A9F_418C_14164C7751C0",
 "this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_4277B5A0_56E6_18BD_41C3_171037F705BA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.08,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_A6439C98_AA84_1168_41DA_76025FA3398A",
  "duration": 2000,
  "easing": "linear"
 },
 "this.panorama_3F03EA30_32A0_1264_41B3_840B31EA3712",
 "this.panorama_3C1BD2B8_32A0_3264_41B0_1A9D9CBAECD6",
 {
  "class": "Panorama",
  "label": "Front_1",
  "id": "panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9"
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfov": 360,
  "hfovMax": 130,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50_hq.jpeg",
       "width": 6434,
       "height": 3217,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50.jpeg",
       "width": 4002,
       "height": 2001
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 0.07,
        "hfov": 8.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50_0_HS_0_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -10.69
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.64,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50_0_HS_0_0.png",
           "width": 157,
           "height": 157
          }
         ]
        },
        "pitch": -10.69,
        "yaw": 0.07
       }
      ],
      "id": "overlay_5C875440_5236_43D0_4199_DFD0140198A0",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_5ED29E0D_5236_7F53_41BC_399AC31D8C50_t.jpg"
 },
 "this.album_2736F94F_3933_C8CF_41C4_12631C85E218_0",
 "this.photo_1C4B6CE9_14BB_DA92_4197_57B1A08D5F1B",
 "this.photo_31B5FBF6_38CF_CFD1_419A_2ADFF3F5351A",
 {
  "class": "LivePanorama",
  "label": "Front_animated",
  "id": "panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9"
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9"
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_3C4986B7_3261_F26B_41B4_44E2D53D3CE9"
   }
  ],
  "frameTransitionTime": 3000,
  "pitch": 0,
  "frameDisplayTime": 3000,
  "vfov": 180,
  "partial": false,
  "hfovMax": 110,
  "hfov": 360,
  "hfovMin": 110,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_0_hq.jpeg",
       "width": 5376,
       "height": 2688,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_0.jpeg",
       "width": 3217,
       "height": 1608
      }
     ]
    },
    "overlays": [
     {
      "bleaching": 0.11,
      "bleachingDistance": 0.1,
      "pitch": 28.05,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_D5D0C761_C74B_F3FF_41CC_E9060BDD54FE",
      "yaw": -177.73
     },
     {
      "bleaching": 0.11,
      "bleachingDistance": 0.1,
      "pitch": 18.23,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_D6AB3437_C74B_1542_41C2_19C233B0678A",
      "yaw": -62.14
     },
     {
      "bleaching": 0.11,
      "bleachingDistance": 0.1,
      "pitch": 12.56,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_D5C45EAA_C749_154D_41E2_0D7AC81BA06D",
      "yaw": 57.23
     },
     {
      "bleaching": 0.11,
      "bleachingDistance": 0.1,
      "pitch": 16.34,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_D5D66C32_C749_755D_41E5_CB6DDDAC9B53",
      "yaw": 118.43
     },
     {
      "bleaching": 0.11,
      "bleachingDistance": 0.1,
      "pitch": 23.89,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_D5240506_C759_1745_41E1_5544CBE17048",
      "yaw": 11.52
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -6.24,
        "hfov": 7.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_0_HS_10_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -1.58
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.97,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_0_HS_10_0.png",
           "width": 118,
           "height": 118
          }
         ]
        },
        "pitch": -1.58,
        "yaw": -6.24
       }
      ],
      "id": "overlay_32F04F80_234D_D5E6_4191_12616D1CC07C",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_1_hq.jpeg",
       "width": 5376,
       "height": 2688,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_1.jpeg",
       "width": 3217,
       "height": 1608
      }
     ]
    },
    "overlays": [
     "this.overlay_D5D0C761_C74B_F3FF_41CC_E9060BDD54FE",
     "this.overlay_D6AB3437_C74B_1542_41C2_19C233B0678A",
     "this.overlay_D5C45EAA_C749_154D_41E2_0D7AC81BA06D",
     "this.overlay_D5D66C32_C749_755D_41E5_CB6DDDAC9B53",
     "this.overlay_D5240506_C759_1745_41E1_5544CBE17048",
     "this.overlay_32F04F80_234D_D5E6_4191_12616D1CC07C"
    ],
    "thumbnailUrl": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_1_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_2_hq.jpeg",
       "width": 5376,
       "height": 2688,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_2.jpeg",
       "width": 3217,
       "height": 1608
      }
     ]
    },
    "overlays": [
     "this.overlay_D5D0C761_C74B_F3FF_41CC_E9060BDD54FE",
     "this.overlay_D6AB3437_C74B_1542_41C2_19C233B0678A",
     "this.overlay_D5C45EAA_C749_154D_41E2_0D7AC81BA06D",
     "this.overlay_D5D66C32_C749_755D_41E5_CB6DDDAC9B53",
     "this.overlay_D5240506_C759_1745_41E1_5544CBE17048",
     "this.overlay_32F04F80_234D_D5E6_4191_12616D1CC07C"
    ],
    "thumbnailUrl": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_2_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_C826B98D_C749_1F47_41D2_4B5B697AD0DE_1_t.jpg"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45F9B42C_56E6_1F85_41C6_611109A0660E, this.MapViewerMapPlayer)",
    "media": "this.panorama_3F03EA30_32A0_1264_41B3_840B31EA3712",
    "camera": "this.panorama_3F03EA30_32A0_1264_41B3_840B31EA3712_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45F9B42C_56E6_1F85_41C6_611109A0660E"
   }
  ],
  "id": "playList_440B13FF_56E6_1883_41D2_7F394A6CF80A"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45FCC42C_56E6_1F85_41B8_4084448D62A2, this.MapViewerMapPlayer)",
    "media": "this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71",
    "camera": "this.panorama_3C98C04C_32A0_0E3C_41C3_B62B57C6FF71_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45FCC42C_56E6_1F85_41B8_4084448D62A2"
   }
  ],
  "id": "playList_441B0413_56E6_1F83_41BB_0BB562BFF212"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_2340DDC4_393E_4831_41BB_67E523D40E26",
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ],
  "id": "playList_45EEE422_56E6_1FBD_41D1_7C229643827D"
 },
 "this.MapViewerMapPlayer",
 "this.photo_199BD398_14F7_6EB3_4191_9F2D889C462F",
 "this.photo_31B40D00_38CF_C831_41C8_C2EC831ADBE1",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45FB742C_56E6_1F85_41C0_39E5E3AD478F, this.MapViewerMapPlayer)",
    "media": "this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B",
    "camera": "this.panorama_3C74D852_32A1_FE25_41B4_A37EB8D64D3B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45FB742C_56E6_1F85_41C0_39E5E3AD478F"
   }
  ],
  "id": "playList_441BC413_56E6_1F83_41AF_E9EAE8CE8798"
 },
 "this.album_2EDA7DEA_3937_CBF1_41BA_71DE547B980C_2",
 {
  "class": "FadeInEffect",
  "id": "effect_A6438C98_AA84_1168_41D7_62F6747393E3",
  "duration": 2000,
  "easing": "linear"
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_2FEF3D4F_3932_C8CF_41AA_3C51A2B0D887",
  "width": 400,
  "borderSize": 0,
  "shadowSpread": 1,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 1,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "height": 600,
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 50,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "titleTextDecoration": "none",
  "closeButtonPaddingBottom": 0,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 0,
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_4412E40B_56E6_1F83_41B4_9BF6D7A45674",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid4412C40A_56E6_1F8D_41D0_93AC81EA3C6A",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_4412540B_56E6_1F83_41D3_4A605CFC0F37",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7399"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7398"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_4413940B_56E6_1F83_41D4_84CDC67F2552",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7400"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_4413A40B_56E6_1F83_41D5_2E69B51FACD6",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7401"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7397"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": 14,
  "closeButtonBorderRadius": 11,
  "shadowVerticalLength": 0,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 50,
  "headerBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 0,
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontWeight": "normal",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window39774"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_42DF0559_56E6_198F_41BC_63CFF3178518",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.15,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_46A0162A_56E6_1B8D_41CD_65FB552B1EFE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.36,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.album_20D115DE_3932_5BD1_41B5_18856C8EC0EC_2",
 {
  "class": "FadeInEffect",
  "id": "effect_46B7B65A_56E6_1B8D_4189_38DCE7145F61",
  "duration": 3000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_45FCA42C_56E6_1F85_41D2_72427178B167, this.MapViewerMapPlayer)",
    "media": "this.panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85",
    "camera": "this.panorama_3DD81197_32A0_0E2C_41B0_F30B8CF71B85_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_45FCA42C_56E6_1F85_41D2_72427178B167"
   }
  ],
  "id": "playList_441DE413_56E6_1F83_41C4_BD61CB181F0E"
 },
 "this.album_34E6BCC5_38D2_4833_41CB_F5D6120D1588",
 "this.panorama_3EAC2C28_3260_1664_41B1_BBCCF95B9C01",
 "this.panorama_3F8CB334_3260_326D_41AA_4807852EB634",
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_46E2FCD6_56DA_2885_41C5_7BACCB34C298",
  "titlePaddingTop": 5,
  "borderSize": 0,
  "shadowSpread": 1,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColor": [],
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 3,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "title": "",
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconColor": "#B2B2B2",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 20,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "titleTextDecoration": "none",
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorRatios": [],
  "footerHeight": 5,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "backgroundColorRatios": [],
    "class": "Container",
    "id": "container_440743FF_56E6_1883_41D1_93CB8EFAB7FB",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid4407E3FF_56E6_1883_419B_3313678F8AED",
     {
      "backgroundColorRatios": [],
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "right": 0,
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "HTMLText",
        "id": "htmltext_4408C3FF_56E6_1883_41D2_9410DFC50140",
        "backgroundOpacity": 0.7,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minWidth": 0,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "html": "",
        "propagateClick": false,
        "data": {
         "name": "HTMLText7381"
        },
        "visible": false,
        "paddingBottom": 5
       }
      ],
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "bottom",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarWidth": 7,
      "bottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [],
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "height": "30%",
      "scrollBarColor": "#FFFFFF",
      "contentOpaque": true,
      "propagateClick": false,
      "data": {
       "name": "Container7380"
      },
      "horizontalAlign": "left",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "left": 10,
      "backgroundOpacity": 0,
      "id": "component_440813FF_56E6_1883_41B2_1C0F766B9B42",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_AlbumPlayList, -1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7382"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
      "backgroundOpacity": 0,
      "id": "component_440823FF_56E6_1883_41C0_345A61C01EBA",
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "mode": "push",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_2EB9C9C2_38D2_C831_4187_58DA0388AF33_AlbumPlayList, 1)",
      "paddingRight": 0,
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "propagateClick": false,
      "data": {
       "name": "IconButton7383"
      },
      "horizontalAlign": "center",
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 20,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container7379"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "shadow": true,
  "titleFontSize": "1.29vh",
  "closeButtonBorderRadius": 11,
  "headerBorderSize": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "paddingTop": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundOpacity": 0,
  "titleFontWeight": "normal",
  "headerPaddingRight": 0,
  "layout": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "data": {
   "name": "Window5980"
  },
  "closeButtonPressedBackgroundColor": [],
  "shadowOpacity": 0.5
 },
 "this.album_3489ADEA_38D2_4BF1_418E_5DCE59AFA897"
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": 14,
  "toolTipBackgroundColor": "transparent",
  "id": "MainViewer",
  "left": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 100,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "minWidth": 100,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "progressLeft": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 500,
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 0,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "displayTooltipInTouchScreens": true,
  "toolTipFontColor": "#FFFFFF",
  "toolTipPaddingLeft": 0,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 50,
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#000000",
  "top": 0,
  "bottom": "0%",
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 50,
  "paddingTop": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "toolTipBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_340E1C59_243B_3D18_41BB_C35E3D5DFBA1",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "id": "Container_B6DE580A_A680_3C93_41D8_6638D6AE2B7B",
    "backgroundOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "maxWidth": 600,
      "class": "Image",
      "id": "Image_0FC89B6B_3932_C8F7_4174_6DBC5D9FC8A8",
      "left": "0%",
      "maxHeight": 182,
      "backgroundOpacity": 0,
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_0FC89B6B_3932_C8F7_4174_6DBC5D9FC8A8.png",
      "borderRadius": 0,
      "verticalAlign": "middle",
      "top": "0%",
      "minHeight": 1,
      "minWidth": 1,
      "click": "this.openLink('http://www.ccelcafetal.com/', '_blank')",
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "propagateClick": false,
      "data": {
       "name": "Image_Logo"
      },
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "17.063%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_logo"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "top": "0.2%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "7.65%",
  "paddingTop": 0,
  "layout": "vertical",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_cintillo"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_23A282E9_2998_C356_41B9_D6AB71A698A7",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0.61
    ],
    "class": "Container",
    "id": "Container_B98DF5F1_B1B7_E51D_41DA_E7D2FDE4E571",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "width": 443,
    "children": [
     {
      "toolTipFontSize": 14,
      "class": "IconButton",
      "toolTipBackgroundColor": "transparent",
      "toolTipBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "id": "IconButton_2061B75C_298B_416D_41C0_7DFD58C607F5",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "toolTipPaddingLeft": 0,
      "shadow": false,
      "toolTipPaddingRight": 50,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_2061B75C_298B_416D_41C0_7DFD58C607F5_pressed.png",
      "toolTipFontWeight": "normal",
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipPaddingTop": 50,
      "minWidth": 50,
      "toolTip": "Map\u000a",
      "click": "if(!this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6.get('visible')){ this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, true, 0, this.effect_A6438C98_AA84_1168_41D7_62F6747393E3, 'showEffect', false) } else { this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, false, 0, this.effect_A6439C98_AA84_1168_41DA_76025FA3398A, 'hideEffect', false) }",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": "100%",
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 0,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_2061B75C_298B_416D_41C0_7DFD58C607F5.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Map"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 0,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "toolTipFontSize": 14,
      "class": "IconButton",
      "toolTipBackgroundColor": "transparent",
      "toolTipBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "id": "IconButton_1D6C8AD7_141F_0E80_4189_0BCC38C12195",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "toolTipPaddingLeft": 0,
      "shadow": false,
      "toolTipPaddingRight": 50,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_1D6C8AD7_141F_0E80_4189_0BCC38C12195_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 50,
      "minWidth": 50,
      "toolTip": "Core & Shell",
      "click": "this.mainPlayList.set('selectedIndex', 8)",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 0,
      "height": "100%",
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_1D6C8AD7_141F_0E80_4189_0BCC38C12195.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Empty"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 0,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "toolTipFontSize": 14,
      "class": "IconButton",
      "toolTipBackgroundColor": "transparent",
      "toolTipBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "id": "IconButton_1D44BAE9_141D_0E80_419A_8E915067AD28",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "toolTipPaddingLeft": 0,
      "shadow": false,
      "toolTipPaddingRight": 50,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_1D44BAE9_141D_0E80_419A_8E915067AD28_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 50,
      "minWidth": 50,
      "toolTip": "Home",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 0,
      "height": "100%",
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_1D44BAE9_141D_0E80_419A_8E915067AD28.png",
      "propagateClick": false,
      "data": {
       "name": "Button_home"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 0,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "toolTipFontSize": 14,
      "class": "IconButton",
      "toolTipBackgroundColor": "transparent",
      "toolTipBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "id": "IconButton_33741564_3D3B_CFBF_41A2_AB2EB58DC2B5",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "toolTipPaddingLeft": 0,
      "shadow": false,
      "toolTipPaddingRight": 50,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_33741564_3D3B_CFBF_41A2_AB2EB58DC2B5_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 50,
      "minWidth": 50,
      "toolTip": "Video Tour",
      "click": "this.setComponentVisibility(this.Container_398E82B5_3387_2BA9_41BF_97CAF1A19D64, true, 0, null, null, false)",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 0,
      "height": "100%",
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_33741564_3D3B_CFBF_41A2_AB2EB58DC2B5.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Video"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 0,
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "toolTipFontSize": 14,
      "class": "IconButton",
      "toolTipBackgroundColor": "transparent",
      "toolTipBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "id": "IconButton_2391810D_299F_3EEE_41BC_97B04C974795",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "toolTipPaddingLeft": 0,
      "shadow": false,
      "toolTipPaddingRight": 50,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_2391810D_299F_3EEE_41BC_97B04C974795_pressed.png",
      "toolTipFontWeight": "normal",
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipPaddingTop": 50,
      "minWidth": 50,
      "toolTip": "Info",
      "click": "if(!this.Container_290E11E4_3009_0599_41AE_22ED71CAB910.get('visible')){ this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, true, 0, this.effect_3CB3C41D_3064_C97C_41BE_B1C63A1EACE3, 'showEffect', false) } else { this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false, 0, this.effect_3CB3D41D_3064_C97C_41A1_52355E7B9243, 'hideEffect', false) }",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": "100%",
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 0,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_2391810D_299F_3EEE_41BC_97B04C974795.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Info"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 0,
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_31952CEF_3D04_5E89_41B0_406DA026A4BE"
    ],
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#000000"
    ],
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "height": "76.712%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_Iconos_Menu"
    },
    "horizontalAlign": "center",
    "gap": 0,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "2%",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "10.946%",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Master_container_Icons"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_3D582847_2989_CF5B_41C2_441CD2C15B9A",
  "paddingLeft": 0,
  "children": [
   {
    "fontFamily": "Arial",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "DropDown",
    "id": "DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1",
    "backgroundOpacity": 0.84,
    "popUpShadowOpacity": 0,
    "paddingLeft": 5,
    "borderSize": 0,
    "shadow": false,
    "popUpBackgroundColor": "#999999",
    "selectedPopUpBackgroundColor": "#333333",
    "borderRadius": 4,
    "popUpBorderRadius": 0,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "arrowBeforeLabel": false,
    "popUpShadowColor": "#000000",
    "minHeight": 20,
    "fontColor": "#FFFFFF",
    "selectedPopUpFontColor": "#FFFFFF",
    "minWidth": 200,
    "popUpShadowSpread": 1,
    "paddingRight": 5,
    "backgroundColor": [
     "#333333",
     "#000000"
    ],
    "paddingTop": 0,
    "fontSize": 14,
    "fontStyle": "normal",
    "playList": "this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist",
    "height": "100%",
    "popUpShadow": false,
    "popUpGap": 0,
    "popUpShadowBlurRadius": 6,
    "propagateClick": false,
    "data": {
     "name": "DropDown_Locations"
    },
    "textDecoration": "none",
    "popUpFontColor": "#000000",
    "popUpBackgroundOpacity": 0.84,
    "fontWeight": "normal",
    "arrowColor": "#FFFFFF",
    "gap": 0,
    "prompt": "Locations",
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "top": "7.88%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "3.962%",
  "paddingTop": 0,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container:dropdwon"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "maxWidth": 1170,
  "class": "Container",
  "id": "Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6",
  "left": "0%",
  "maxHeight": 458,
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "children": [
   {
    "maxWidth": 626,
    "class": "Image",
    "maxHeight": 626,
    "backgroundOpacity": 0,
    "id": "Image_F1687B56_FAD7_45D9_41DB_166463365298",
    "paddingLeft": 0,
    "width": 56,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "url": "skin/Image_F1687B56_FAD7_45D9_41DB_166463365298.png",
    "verticalAlign": "middle",
    "minHeight": 1,
    "minWidth": 1,
    "click": "this.setComponentVisibility(this.Container_2E8EAA7B_2436_A26C_41BD_C5D60DB290D6, false, 0, this.effect_F6324F9A_FAD3_3D49_41D1_FA9EE9BB0378, 'hideEffect', false)",
    "paddingRight": 0,
    "height": 36,
    "paddingTop": 0,
    "propagateClick": false,
    "data": {
     "name": "Close Map"
    },
    "horizontalAlign": "center",
    "visible": false,
    "scaleMode": "fit_inside",
    "paddingBottom": 0
   },
   "this.MapViewer"
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "99.321%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "top": "12.02%",
  "minHeight": 0,
  "scrollBarWidth": 10,
  "bottom": "25.41%",
  "verticalAlign": "middle",
  "minWidth": 250,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "vertical",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container Map"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_290E11E4_3009_0599_41AE_22ED71CAB910",
  "paddingLeft": 0,
  "children": [
   {
    "class": "Image",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "id": "Image_28917AB8_3007_07E9_41BE_D93DE0756190",
    "paddingLeft": 0,
    "width": 382,
    "shadow": false,
    "borderSize": 0,
    "borderRadius": 0,
    "url": "skin/Image_28917AB8_3007_07E9_41BE_D93DE0756190.png",
    "minHeight": 1,
    "click": "this.setComponentVisibility(this.Container_290E11E4_3009_0599_41AE_22ED71CAB910, false, 0, this.effect_2BD11C34_3D4F_CF28_41C4_1043D4630055, 'hideEffect', false)",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "paddingTop": 0,
    "horizontalAlign": "right",
    "propagateClick": false,
    "data": {
     "name": "Image_Specs"
    },
    "scaleMode": "fit_inside",
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "paddingTop": 0,
  "layout": "vertical",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Specs"
  },
  "horizontalAlign": "right",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "id": "Container_398E82B5_3387_2BA9_41BF_97CAF1A19D64",
  "left": "0%",
  "backgroundOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "children": [
   {
    "class": "Container",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_3906B300_3381_6A67_41BF_B34BE040B342",
    "paddingLeft": 0,
    "children": [
     {
      "maxWidth": 626,
      "class": "Image",
      "maxHeight": 626,
      "backgroundOpacity": 0,
      "id": "Image_39DC555B_3380_EE99_41C8_EFAA93C95AC8",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_39DC555B_3380_EE99_41C8_EFAA93C95AC8.png",
      "width": "9.324%",
      "borderRadius": 0,
      "minHeight": 1,
      "verticalAlign": "middle",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_398E82B5_3387_2BA9_41BF_97CAF1A19D64, false, 0, null, null, false)",
      "paddingRight": 0,
      "height": "77.444%",
      "paddingTop": 0,
      "propagateClick": false,
      "data": {
       "name": "Button_Close_Map"
      },
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "width": "92.906%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "11.885%",
    "minWidth": 1,
    "paddingTop": 0,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_X_ Webframe"
    },
    "horizontalAlign": "right",
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "backgroundColorRatios": [
     0
    ],
    "class": "WebFrame",
    "id": "WebFrame_39F257FA_3383_2998_41BC_102386C9B19E",
    "backgroundOpacity": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "shadow": false,
    "width": "70%",
    "borderRadius": 0,
    "url": "https://sketchfab.com/models/473cce37306f408fa85c490f662138c2/embed",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "minWidth": 1,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "height": "79.508%",
    "scrollEnabled": true,
    "propagateClick": false,
    "data": {
     "name": "WebFrame_Sketchfab"
    },
    "insetBorder": false,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "layout": "vertical",
  "height": "100%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Web_Master"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent7432"
  },
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage7433"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadow": false,
  "gap": 5,
  "shadowSpread": 1,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "layout": "horizontal",
  "top": 10,
  "minHeight": 0,
  "shadowColor": "#000000",
  "fontColor": "#FFFFFF",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "rollOverIconColor": "#666666",
  "iconBeforeLabel": true,
  "mode": "push",
  "minWidth": 0,
  "borderColor": "#000000",
  "paddingRight": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "label": "",
  "iconColor": "#000000",
  "fontSize": "1.29vh",
  "fontStyle": "normal",
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton7434"
  },
  "iconWidth": 20,
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.playAudioList([this.audio_53B6709A_421E_58C8_41B6_1C343190B517]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_31952CEF_3D04_5E89_41B0_406DA026A4BE], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_F6395A4C_FFD9_E101_41E6_22619F9BC6F1_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_45ECF422_56E6_1FBD_41C0_2C5C708B2F1D.set('selectedIndex', 0)",
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; }
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player423"
 },
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
