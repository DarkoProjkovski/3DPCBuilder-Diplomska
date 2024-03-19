/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 CoolerMasterNR200MiniITXNEW.glb 
*/

import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { AnimationContext } from '../../App'
import { playAnimation, stopAnimation } from '../componentLogic/AnimationLogic'

const CoolerMasterNR200MiniITX=(props)=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/pc_parts/pc_cases/CoolerMasterNR200MiniITXNEW.glb')
  const { actions } = useAnimations(animations, group)

  const { smlCaseSide1Slide, setSmlCaseSide1Slide} = useContext(AnimationContext)

  useEffect(()=>{
    if(smlCaseSide1Slide){
      playAnimation(actions.SidePanel1Slide)
      playAnimation(actions.SidePanel2Slide)
    }
    else if(smlCaseSide1Slide == false){
      stopAnimation(actions.SidePanel1Slide)
      stopAnimation(actions.SidePanel2Slide)
    }
  },[smlCaseSide1Slide])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube">
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials.darkgrey} />
        </group>
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.WhiteMaterialImage} />
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.WhiteMaterialImage} position={[0.925, 0.047, 0]} />
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.WhiteMaterialImage} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.WhiteMaterialImage} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.WhiteMaterialImage} />
        <group name="Cube009">
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.lightdarkgrey} />
          <mesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials.darkgrey} />
        </group>
        <group name="Power_unit_cable_input_base" position={[-0.943, 0.617, -0.275]}>
          <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials.darkgrey} />
          <mesh name="Cube022_1" geometry={nodes.Cube022_1.geometry} material={materials.MetallicGrey} />
        </group>
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials.WhiteMaterialImage} position={[-0.969, -0.506, 0.214]} />
        <mesh name="BackScrews" geometry={nodes.BackScrews.geometry} material={materials.darkgrey} position={[-0.973, -0.358, 0.218]} />
        <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials.WhiteMaterialImage} position={[0, 0, 0.008]} />
        <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.WhiteMaterialImage} position={[0, 0, 0.013]} />
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials.WhiteMaterialImage} position={[0.325, 0.698, -0.04]} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.WhiteMaterialImage} position={[-0.056, 0.005, 0.452]} />
        <group name="AsusRogStrixB350-I" position={[-0.412, 0.038, 1.832]} scale={0}>
          <mesh name="AsusRogStrixB350-I_1" geometry={nodes['AsusRogStrixB350-I_1'].geometry} material={materials.darkgrey} />
          <mesh name="AsusRogStrixB350-I_2" geometry={nodes['AsusRogStrixB350-I_2'].geometry} material={materials['AsusRogStrixB350-IBase']} />
          <mesh name="AsusRogStrixB350-I_3" geometry={nodes['AsusRogStrixB350-I_3'].geometry} material={materials['AsusRogStixB350-IBaseBack']} />
          <mesh name="AsusRogStrixB350-I_4" geometry={nodes['AsusRogStrixB350-I_4'].geometry} material={materials.MetallicGrey} />
          <mesh name="AsusRogStrixB350-I_5" geometry={nodes['AsusRogStrixB350-I_5'].geometry} material={materials.gold} />
          <mesh name="AsusRogStrixB350-I_6" geometry={nodes['AsusRogStrixB350-I_6'].geometry} material={materials.lightdarkgrey} />
          <mesh name="AsusRogStrixB350-I_7" geometry={nodes['AsusRogStrixB350-I_7'].geometry} material={materials.MotherboardBaseFrontSide} />
          <mesh name="AsusRogStrixB350-I_8" geometry={nodes['AsusRogStrixB350-I_8'].geometry} material={materials.red} />
          <mesh name="AsusRogStrixB350-I_9" geometry={nodes['AsusRogStrixB350-I_9'].geometry} material={materials.DarkBlue} />
          <mesh name="AsusRogStrixB350-I_10" geometry={nodes['AsusRogStrixB350-I_10'].geometry} material={materials.WhiteMaterialImage} />
        </group>
        <mesh name="AMDRyzen9-5950x" geometry={nodes['AMDRyzen9-5950x'].geometry} material={materials['AMDRyzen9-5950x']} position={[-0.817, 0.181, -0.196]} scale={0} />
        <mesh name="AMDRyzen7-5700" geometry={nodes['AMDRyzen7-5700'].geometry} material={materials['AMDRyzen7-5700']} position={[-0.817, 0.181, -0.196]} scale={0} />
        <mesh name="AMDRyzen5-5600" geometry={nodes['AMDRyzen5-5600'].geometry} material={materials['AMDRyzen5-5600']} position={[-0.817, 0.181, -0.196]} scale={0} />
        <group name="Samsung870EVO" position={[1.81, -0.006, 0.213]} scale={0}>
          <mesh name="Samsung870EVO_1" geometry={nodes.Samsung870EVO_1.geometry} material={materials.Samsung870EVO_back} />
          <mesh name="Samsung870EVO_2" geometry={nodes.Samsung870EVO_2.geometry} material={materials.Samsung870EVO_front} />
        </group>
        <group name="Samsung970EVOPlus" position={[-0.115, 1.553, 0]} scale={0}>
          <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials.Samsung970EVOPlusfront} />
          <mesh name="Plane012_1" geometry={nodes.Plane012_1.geometry} material={materials.Samsung970EVOPlusback} />
          <mesh name="Plane012_2" geometry={nodes.Plane012_2.geometry} material={materials.darkgrey} />
        </group>
        <group name="SeagateBarraCuda2TB" position={[-0.514, 0.045, 1.211]} scale={0}>
          <mesh name="Cube598" geometry={nodes.Cube598.geometry} material={materials.Samsung870EVO_back} />
          <mesh name="Cube598_1" geometry={nodes.Cube598_1.geometry} material={materials.darkgrey} />
          <mesh name="Cube598_2" geometry={nodes.Cube598_2.geometry} material={materials.MetallicGrey} />
          <mesh name="Cube598_3" geometry={nodes.Cube598_3.geometry} material={materials.SeagateBarraCuda2TBfront} />
          <mesh name="Cube598_4" geometry={nodes.Cube598_4.geometry} material={materials.SeagateBarraCuda2TBback} />
        </group>
        <group name="VSFXPlatnum1300" position={[0.374, 0.297, -1.681]} scale={0}>
          <mesh name="cooler_master_logo_STEPPED001" geometry={nodes.cooler_master_logo_STEPPED001.geometry} material={materials.PWMiniTop} />
          <mesh name="cooler_master_logo_STEPPED001_1" geometry={nodes.cooler_master_logo_STEPPED001_1.geometry} material={materials.PWMiniFront} />
          <mesh name="cooler_master_logo_STEPPED001_2" geometry={nodes.cooler_master_logo_STEPPED001_2.geometry} material={materials.darkgrey} />
          <mesh name="cooler_master_logo_STEPPED001_3" geometry={nodes.cooler_master_logo_STEPPED001_3.geometry} material={materials.MetallicGrey} />
          <mesh name="cooler_master_logo_STEPPED001_4" geometry={nodes.cooler_master_logo_STEPPED001_4.geometry} material={materials.PWMiniTopInside} />
          <mesh name="cooler_master_logo_STEPPED001_5" geometry={nodes.cooler_master_logo_STEPPED001_5.geometry} material={materials.PWMiniSide} />
          <mesh name="cooler_master_logo_STEPPED001_6" geometry={nodes.cooler_master_logo_STEPPED001_6.geometry} material={materials.PWMinibottom} />
          <mesh name="cooler_master_logo_STEPPED001_7" geometry={nodes.cooler_master_logo_STEPPED001_7.geometry} material={materials.PWMiniback} />
        </group>
        <group name="NvidiaGeForceRTX3090" position={[-0.092, -0.312, 2.133]} scale={0}>
          <mesh name="NvidiaGeForceRTX3090_1" geometry={nodes.NvidiaGeForceRTX3090_1.geometry} material={materials['RTX3090 front']} />
          <mesh name="NvidiaGeForceRTX3090_2" geometry={nodes.NvidiaGeForceRTX3090_2.geometry} material={materials.RTX3090top} />
          <mesh name="NvidiaGeForceRTX3090_3" geometry={nodes.NvidiaGeForceRTX3090_3.geometry} material={materials.RTX3090back} />
          <mesh name="NvidiaGeForceRTX3090_4" geometry={nodes.NvidiaGeForceRTX3090_4.geometry} material={materials.RTX3090bottom} />
          <mesh name="NvidiaGeForceRTX3090_5" geometry={nodes.NvidiaGeForceRTX3090_5.geometry} material={materials.darkgrey} />
          <mesh name="NvidiaGeForceRTX3090_6" geometry={nodes.NvidiaGeForceRTX3090_6.geometry} material={materials.MetallicGrey} />
          <mesh name="NvidiaGeForceRTX3090_7" geometry={nodes.NvidiaGeForceRTX3090_7.geometry} material={materials['Material.002']} />
        </group>
        <group name="NvidiaGeForceRTX3080" position={[-0.213, -0.302, 2.023]} scale={0}>
          <mesh name="NvidiaGeForceRTX3080_1" geometry={nodes.NvidiaGeForceRTX3080_1.geometry} material={materials.darkgrey} />
          <mesh name="NvidiaGeForceRTX3080_2" geometry={nodes.NvidiaGeForceRTX3080_2.geometry} material={materials['RTX3090 front']} />
          <mesh name="NvidiaGeForceRTX3080_3" geometry={nodes.NvidiaGeForceRTX3080_3.geometry} material={materials.RTX3090back} />
          <mesh name="NvidiaGeForceRTX3080_4" geometry={nodes.NvidiaGeForceRTX3080_4.geometry} material={materials.RTX3090top} />
          <mesh name="NvidiaGeForceRTX3080_5" geometry={nodes.NvidiaGeForceRTX3080_5.geometry} material={materials.RTX3090bottom} />
          <mesh name="NvidiaGeForceRTX3080_6" geometry={nodes.NvidiaGeForceRTX3080_6.geometry} material={materials.RTX3080front} />
          <mesh name="NvidiaGeForceRTX3080_7" geometry={nodes.NvidiaGeForceRTX3080_7.geometry} material={materials.GraphicsCardSocket} />
          <mesh name="NvidiaGeForceRTX3080_8" geometry={nodes.NvidiaGeForceRTX3080_8.geometry} material={materials.MetallicGrey} />
        </group>
        <group name="NvidiaGeForceRTX3070" position={[-0.359, -0.31, 1.83]} scale={0}>
          <mesh name="NvidiaGeForceRTX3070_1" geometry={nodes.NvidiaGeForceRTX3070_1.geometry} material={materials.darkgrey} />
          <mesh name="NvidiaGeForceRTX3070_2" geometry={nodes.NvidiaGeForceRTX3070_2.geometry} material={materials['RTX3090 front']} />
          <mesh name="NvidiaGeForceRTX3070_3" geometry={nodes.NvidiaGeForceRTX3070_3.geometry} material={materials.RTX3090top} />
          <mesh name="NvidiaGeForceRTX3070_4" geometry={nodes.NvidiaGeForceRTX3070_4.geometry} material={materials.RTX3090back} />
          <mesh name="NvidiaGeForceRTX3070_5" geometry={nodes.NvidiaGeForceRTX3070_5.geometry} material={materials.RTX3090bottom} />
          <mesh name="NvidiaGeForceRTX3070_6" geometry={nodes.NvidiaGeForceRTX3070_6.geometry} material={nodes.NvidiaGeForceRTX3070_6.material} />
          <mesh name="NvidiaGeForceRTX3070_7" geometry={nodes.NvidiaGeForceRTX3070_7.geometry} material={materials['RTX3070 front']} />
          <mesh name="NvidiaGeForceRTX3070_8" geometry={nodes.NvidiaGeForceRTX3070_8.geometry} material={materials.GraphicsCardSocket2} />
        </group>
        <group name="DIMM_16GB_DDR4_3600MHz" position={[-0.842, 0.137, -0.248]} scale={0}>
          <mesh name="Cube303" geometry={nodes.Cube303.geometry} material={materials['HP 8GB RAM frontside']} />
          <mesh name="Cube303_1" geometry={nodes.Cube303_1.geometry} material={materials['HP 8GB RAM backside']} />
          <mesh name="Cube303_2" geometry={nodes.Cube303_2.geometry} material={materials.MaterialRGB} />
        </group>
        <group name="Kingston_Fury_Beast_CL18_DDR4_8GB" position={[-0.796, 0.175, -0.24]} scale={0}>
          <mesh name="Cube199" geometry={nodes.Cube199.geometry} material={materials['ktc beast frontside']} />
          <mesh name="Cube199_1" geometry={nodes.Cube199_1.geometry} material={materials['ktc beast backside']} />
        </group>
        <group name="Samsung870EVO001" position={[1.81, -0.006, -0.227]} scale={0}>
          <mesh name="Samsung870EVO001_1" geometry={nodes.Samsung870EVO001_1.geometry} material={materials.Samsung870EVO_back} />
          <mesh name="Samsung870EVO001_2" geometry={nodes.Samsung870EVO001_2.geometry} material={materials.Samsung870EVO_front} />
        </group>
        <group name="Samsung870EVO002" position={[0.424, 0.138, 0.844]} scale={0}>
          <mesh name="Samsung870EVO002_1" geometry={nodes.Samsung870EVO002_1.geometry} material={materials.Samsung870EVO_back} />
          <mesh name="Samsung870EVO002_2" geometry={nodes.Samsung870EVO002_2.geometry} material={materials.Samsung870EVO_front} />
        </group>
        <group name="SeagateBarraCuda2TB001" position={[0.417, 0.045, 1.211]} scale={0}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.Samsung870EVO_back} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.darkgrey} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials.MetallicGrey} />
          <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials.SeagateBarraCuda2TBfront} />
          <mesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials.SeagateBarraCuda2TBback} />
        </group>
        <group name="DIMM_16GB_DDR4_3600MHz001" position={[-0.842, 0.137, -0.248]} scale={0}>
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['HP 8GB RAM frontside']} />
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials['HP 8GB RAM backside']} />
          <mesh name="Cube007_2" geometry={nodes.Cube007_2.geometry} material={materials.MaterialRGB} />
        </group>
        <group name="Kingston_Fury_Beast_CL18_DDR4_8GB001" position={[-0.796, 0.175, -0.24]} scale={0}>
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials['ktc beast frontside']} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials['ktc beast backside']} />
        </group>
        <group name="CorsairFanBlack92mm" position={[-0.449, 0.286, 1.885]} scale={0}>
          <mesh name="Vert011" geometry={nodes.Vert011.geometry} material={materials.darkgrey} />
          <mesh name="Vert011_1" geometry={nodes.Vert011_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_92mm" position={[-0.449, 0.286, 1.885]} scale={0}>
          <mesh name="Vert013" geometry={nodes.Vert013.geometry} material={materials.darkgrey} />
          <mesh name="Vert013_1" geometry={nodes.Vert013_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite92mm" position={[-0.449, 0.286, 1.885]} scale={0}>
          <mesh name="Vert015" geometry={nodes.Vert015.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert015_1" geometry={nodes.Vert015_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack120mm" position={[-0.327, 0.166, 1.576]} scale={0}>
          <mesh name="Vert016" geometry={nodes.Vert016.geometry} material={materials.darkgrey} />
          <mesh name="Vert016_1" geometry={nodes.Vert016_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_120mm" position={[-0.327, 0.166, 1.576]} scale={0}>
          <mesh name="Vert012" geometry={nodes.Vert012.geometry} material={materials.darkgrey} />
          <mesh name="Vert012_1" geometry={nodes.Vert012_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanBlackv1_120mm001" position={[0.275, 0.166, 1.576]} scale={0}>
          <mesh name="Vert018" geometry={nodes.Vert018.geometry} material={materials.darkgrey} />
          <mesh name="Vert018_1" geometry={nodes.Vert018_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite120mm" position={[-0.327, 0.166, 1.576]} scale={0}>
          <mesh name="Vert009" geometry={nodes.Vert009.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert009_1" geometry={nodes.Vert009_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanWhite120mm001" position={[0.275, 0.166, 1.576]} scale={0}>
          <mesh name="Vert019" geometry={nodes.Vert019.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert019_1" geometry={nodes.Vert019_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack120mm001" position={[0.275, 0.166, 1.576]} scale={0}>
          <mesh name="Vert020" geometry={nodes.Vert020.geometry} material={materials.darkgrey} />
          <mesh name="Vert020_1" geometry={nodes.Vert020_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlack120mm002" position={[0.275, -0.341, 1.576]} scale={0}>
          <mesh name="Vert021" geometry={nodes.Vert021.geometry} material={materials.darkgrey} />
          <mesh name="Vert021_1" geometry={nodes.Vert021_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_120mm002" position={[0.275, -0.341, 1.576]} scale={0}>
          <mesh name="Vert022" geometry={nodes.Vert022.geometry} material={materials.darkgrey} />
          <mesh name="Vert022_1" geometry={nodes.Vert022_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite120mm002" position={[0.275, -0.341, 1.576]} scale={0}>
          <mesh name="Vert023" geometry={nodes.Vert023.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert023_1" geometry={nodes.Vert023_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack120mm003" position={[0.275, -0.341, 1.576]} scale={0}>
          <mesh name="Vert024" geometry={nodes.Vert024.geometry} material={materials.darkgrey} />
          <mesh name="Vert024_1" geometry={nodes.Vert024_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_120mm003" position={[0.275, -0.341, 1.576]} scale={0}>
          <mesh name="Vert025" geometry={nodes.Vert025.geometry} material={materials.darkgrey} />
          <mesh name="Vert025_1" geometry={nodes.Vert025_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite120mm003" position={[0.275, -0.341, 1.576]} scale={0}>
          <mesh name="Vert026" geometry={nodes.Vert026.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert026_1" geometry={nodes.Vert026_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack120mm004" position={[-0.441, 0.005, 1.451]} scale={0}>
          <mesh name="Vert027" geometry={nodes.Vert027.geometry} material={materials.darkgrey} />
          <mesh name="Vert027_1" geometry={nodes.Vert027_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_120mm004" position={[-0.441, 0.005, 1.451]} scale={0}>
          <mesh name="Vert028" geometry={nodes.Vert028.geometry} material={materials.darkgrey} />
          <mesh name="Vert028_1" geometry={nodes.Vert028_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite120mm004" position={[-0.441, 0.005, 1.451]} scale={0}>
          <mesh name="Vert029" geometry={nodes.Vert029.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert029_1" geometry={nodes.Vert029_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack120mm005" position={[0.327, 0.005, 1.383]} scale={0}>
          <mesh name="Vert030" geometry={nodes.Vert030.geometry} material={materials.darkgrey} />
          <mesh name="Vert030_1" geometry={nodes.Vert030_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_120mm005" position={[0.327, 0.005, 1.383]} scale={0}>
          <mesh name="Vert031" geometry={nodes.Vert031.geometry} material={materials.darkgrey} />
          <mesh name="Vert031_1" geometry={nodes.Vert031_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite120mm005" position={[0.327, 0.005, 1.383]} scale={0}>
          <mesh name="Vert032" geometry={nodes.Vert032.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert032_1" geometry={nodes.Vert032_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack140mm" position={[-0.441, 0.005, 1.451]} scale={0}>
          <mesh name="Vert017" geometry={nodes.Vert017.geometry} material={materials.darkgrey} />
          <mesh name="Vert017_1" geometry={nodes.Vert017_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_140mm" position={[-0.441, 0.005, 1.451]} scale={0}>
          <mesh name="Vert010" geometry={nodes.Vert010.geometry} material={materials.darkgrey} />
          <mesh name="Vert010_1" geometry={nodes.Vert010_1.geometry} material={materials.corsairIcon} />
        </group>
        <group name="CorsairFanWhite140mm" position={[-0.441, 0.005, 1.451]} scale={0}>
          <mesh name="Vert014" geometry={nodes.Vert014.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert014_1" geometry={nodes.Vert014_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanWhite140mm001" position={[0.327, 0.005, 1.383]} scale={0}>
          <mesh name="Vert008" geometry={nodes.Vert008.geometry} material={materials.WhiteMaterialImage} />
          <mesh name="Vert008_1" geometry={nodes.Vert008_1.geometry} material={materials.FanWhite} />
        </group>
        <group name="CorsairFanBlack140mm001" position={[0.327, 0.005, 1.383]} scale={0}>
          <mesh name="Vert033" geometry={nodes.Vert033.geometry} material={materials.darkgrey} />
          <mesh name="Vert033_1" geometry={nodes.Vert033_1.geometry} material={materials.BlackFan2nd} />
        </group>
        <group name="CorsairFanBlackv1_140mm001" position={[0.327, 0.005, 1.383]} scale={0}>
          <mesh name="Vert034" geometry={nodes.Vert034.geometry} material={materials.darkgrey} />
          <mesh name="Vert034_1" geometry={nodes.Vert034_1.geometry} material={materials.corsairIcon} />
        </group>
        <mesh name="TopSmallGrid" geometry={nodes.TopSmallGrid.geometry} material={materials['lightdarkgrey.001']} position={[-0.029, 0.713, 0]} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} position={[-0.063, 0.7, 0]} rotation={[-Math.PI, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/pc_parts/pc_cases/CoolerMasterNR200MiniITXNEW.glb')

export default CoolerMasterNR200MiniITX