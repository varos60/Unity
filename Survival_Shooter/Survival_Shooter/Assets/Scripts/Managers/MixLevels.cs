using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;

public class MixLevels : MonoBehaviour
{
    public AudioMixer masterMixer;

    public void SetFXVolumen(float volume)
    {
        masterMixer.SetFloat("fxVol", volume);
    }

    public void SetMusicVolumen(float volume)
    {
        masterMixer.SetFloat("musicVol", volume);
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
