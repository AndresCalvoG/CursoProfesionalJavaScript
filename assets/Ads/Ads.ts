export interface Ad{
    imageUrl: string;
    title: string;
    body: string;
    url: string;
}

const All_ADS: Ad[] = [
    {
        imageUrl: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'futbol',
        body:'el mejor balon del mundial',
        url: 'https://www.pexels.com/es-es/buscar/futbol/'
    },
    {
        imageUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'futbol',
        body:'la mejor cancha',
        url: 'https://www.pexels.com/es-es/buscar/futbol/'
    }
]


class Ads{
    private static instance: Ads;
    private ads: Ad[];

    private constructor(){
        this.initAds();
    }

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads();
        }
        return Ads.instance;
    }

    private initAds(){
        this.ads = [...All_ADS]
    }

    getAd(){
        if(this.ads.length === 0){
            this.initAds();
        }
       return this.ads.pop();
    }
}

export default Ads;